# Install the AzureAD module if you haven't already

Install-Module AzureAD

# Import the AzureAD module

Import-Module AzureAD

# Connect to Azure AD

$credential = Get-Credential
Connect-AzureAD -Credential $credential

# Get the users and select the properties you need

$users = Get-AzureADUser | Select-Object UserPrincipalName, DisplayName, Department, JobTitle

# Export the users to a CSV file

$users | Export-Csv -Path "C:\Temporary\Automatyzacja\AzureADUsers.csv" -NoTypeInformation