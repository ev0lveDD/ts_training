Import-Module -Name ActiveDirectory


$userlist = Import-CSV -Path 'C:\temp\proba_haslo.csv'

$CompleteReport=@()

foreach($user in $userlist) {
    $Login = $user.Login
    $Npassword = $user.Npassword

    $userdata = Get-ADUser -Filter "mailNickname -eq '$Login'" | Select-Object mailNickname, userPrincipalName, department, displayName
 
    if ($userdata) {
        Write-Output "User found! Changing password for: '$Login'"
        Set-ADAccountPassword -Identity $Login -Reset -NewPassword (ConvertTo-SecureString -AsPlainText $Npassword -Force)
    } else {
        Write-Output "User not found."
    }
    $CompleteReport = $CompleteReport+$userdata
}

$CompleteReport | Export-Csv user.csv -NoTypeInformation