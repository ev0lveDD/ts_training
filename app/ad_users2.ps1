Install-Module -Name AzureAD

Import-Module AzureAD
Connect-AzureAD


$userlist = Import-CSV -Path 'C:\Temporary\Automatyzacja\proba.csv'

$CompleteReport=@()

foreach($user in $userlist) {
    $Surname = $user.Surname
    $Name = $user.Name

    $userdata = Get-AzureADUser -Filter "Surname eq '$Surname' and GivenName eq '$Name' and JobTitle eq 'CONSUMER FIELD FORCE' " | Select-Object MailNickName, UserPrincipalName, City, Country, Department, DisplayName, JobTitle, SipProxyAddress
 
    if ($userdata) {
        Write-Output "User found: $($userdata.MailNickName)"
    } else {
        Write-Output "User not found."
    }
    $CompleteReport = $CompleteReport+$userdata
}

$CompleteReport | Export-Csv user.csv -NoTypeInformation