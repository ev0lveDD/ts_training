Get-DNSClientServerAddress
$indexInput = Read-Host "
Enter the Interface Index of Wi-Fi v4"
Set-DnsClientServerAddress -InterfaceIndex $indexInput -ResetServerAddresses
Write-Host "
Operation performed successfully!"
Start-Sleep -Seconds 3