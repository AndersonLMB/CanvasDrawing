<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="CanvasDrawing.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Canvas Drawing</title>
    <link rel="stylesheet" href="Style/bootstrap.css" />
    <script src="Script/require.js" data-main="Script/initialize.js"></script>
    <link href="Style/Default.css" rel="stylesheet" />
</head>
<body runat="server">
    <div class="canvas-container">
        <canvas id="canvas1"></canvas>
    </div>
    <div class="tools-container" style="width: 200px;">
    </div>
</body>
</html>
