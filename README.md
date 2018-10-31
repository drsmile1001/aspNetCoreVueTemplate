# ASP.NET Core 2.1 + VueJS +  WebPack 4 的SPA模版

參考原文
https://medium.com/@vhanla/creating-a-vuejs-with-typescript-spa-on-asp-net-core-2-1-5efaee226154

## 安裝模版:

1. 複製或下載此原始碼目錄
2. 透過此指令安裝模版
```
dotnet new --install <模版的目錄>
```
指令`dotnet new -l`可以看到目前dotnet有的模版，如安裝完成可以看到列表中有`AspDotNetCoreVue`

## 使用模版
1. 建立新專案
```
dotnet new AspDotNetCoreVue -n <新專案名稱> -o <新專案名稱>
cd <新專案名稱>
dotnet restore
yarn
dotnet run
```
2. 發佈
`dotnet publish -c release`
## 移除模版
```
dotnet new --uninstall <模版的目錄>
```