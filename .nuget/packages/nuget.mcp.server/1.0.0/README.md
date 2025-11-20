# NuGet MCP Server
Contains an [Model Context Protocol](https://modelcontextprotocol.io/introduction) (MCP) server for NuGet, enabling advanced tooling and automation scenarios for NuGet package management.

## Capabilities
- Uses your configured NuGet feeds to get real time information about packages.
- Provides the ability to update packages with known vulnerabilities, including transitive dependencies.
- Provides advanced tooling for updating packages which provides the best updates based on a projects unique package graph and target frameworks.

## Requirements
To run the MCP server, you must have **[.NET 10 Preview 6 or later](https://dotnet.microsoft.com/en-us/download/dotnet/10.0)** installed.
This version of .NET adds a command, `dnx`, which is used to download, install, and run the MCP server from [nuget.org](https://nuget.org).

To verify your .NET version, run the following command in your terminal:
```bash
dotnet --info
```
---
## Remote GitHub MCP Server

[![Install in VS Code](https://img.shields.io/badge/VS_Code-Install_Server-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](
https://vscode.dev/redirect/mcp/install?name=NuGet&config=%7B%22name%22%3A%22NuGet.Mcp.Server%22%2C%22command%22%3A%22dnx%22%2C%22args%22%3A%5B%22NuGet.Mcp.Server%22%2C%22https%3A%2F%2Fapi.nuget.org%2Fv3%2Findex.json%22%2Cnull%2Cnull%5D%7D) [![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install_Server-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://vscode.dev/redirect/mcp/install?name=NuGet&config=%7B%22name%22%3A%22NuGet.Mcp.Server%22%2C%22command%22%3A%22dnx%22%2C%22args%22%3A%5B%22NuGet.Mcp.Server%22%2C%22https%3A%2F%2Fapi.nuget.org%2Fv3%2Findex.json%22%2Cnull%2Cnull%5D%7D&quality=insiders)

## Configuration
To configure the MCP server for use with Visual Studio or VS Code, use the following snippet and include it in your `mcp.json`:

```jsonc
{
  "servers": {
    "nuget": {
      "type": "stdio",
      "command": "dnx",
      "args": [
        "NuGet.Mcp.Server",
        "--source",
        "https://api.nuget.org/v3/index.json",
        "--prerelease",
        "--yes"
      ]
    }
  }
}
```

**NOTE:** The `--prerelease` flag is required to use the MCP server from NuGet.org, as it is currently in preview and will cause new versions to be downloaded automatically.
If you'd like to use a specific version of the MCP server, you can specify it with the `--version` argument, like so:
```jsonc
{
  "servers": {
    "nuget": {
      "type": "stdio",
      "command": "dnx",
      "args": [
        "NuGet.Mcp.Server",
        "--source",
        "https://api.nuget.org/v3/index.json",
        "--version",
        "0.1.0-preview",
        "--yes"
      ]
    }
  }
}
```

When configured this way, you will need to update the version as new release become available.

### GitHub Copilot
You can also configure the MCP Server to work with GitHub Copilot as a Coding Agent in your repositories.

First, you need to add the MCP Server configuration in your Copilot Coding Agent:
```json
{ 
  "mcpServers": {
    "NuGet": {
      "type": "local",
      "command": "dnx",
      "args": ["NuGet.Mcp.Server", "--yes"],
      "tools": ["*"],
      "env": {}
    }
  } 
}
```
This will make all the MCP Server tools available, if you want specific tools you can list them in the `"tools"` parameter array. 

You will also need to make sure Copilot installs .NET 10 Preview 6 or higher in order to have the command `dnx` and install the MCP Server.

`.github/workflows/copilot-setup-steps.yml`
```yml
name: "Copilot Setup Steps"

# Automatically run the setup steps when they are changed to allow for easy validation, and
# allow manual testing through the repository's "Actions" tab
on:
  workflow_dispatch:
  push:
    paths:
      - .github/workflows/copilot-setup-steps.yml
  pull_request:
    paths:
      - .github/workflows/copilot-setup-steps.yml

jobs:
  # The job MUST be called `copilot-setup-steps` or it will not be picked up by Copilot.
  copilot-setup-steps:
    runs-on: ubuntu-latest

    # Set the permissions to the lowest permissions possible needed for your steps.
    # Copilot will be given its own token for its operations.
    permissions:
      # If you want to clone the repository as part of your setup steps, for example to install dependencies, you'll need the `contents: read` permission. If you don't clone the repository in your setup steps, Copilot will do this for you automatically after the steps complete.
      contents: read

    # You can define any steps you want, and they will run before the agent starts.
    # If you do not check out your code, Copilot will do this for you.
    steps:
      - name: Install .NET 10.x
        uses: actions/setup-dotnet@v5
        with:
          dotnet-version: |
            10.x
          dotnet-quality: preview

      - name: dotnet --info
        run: dotnet --info
```
The format of the configuration file can differ for different environments. Below is a table with a link to documentation on how to configure it.

| Environment | Documentation | 
|-------------|--------------|
| Visual Studio | [File locations for automatic discovery of MCP configuration](https://learn.microsoft.com/visualstudio/ide/mcp-servers?view=vs-2022#file-locations-for-automatic-discovery-of-mcp-configuration) |
| VS Code | [MCP configuration in VS Code](https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_add-an-mcp-server) |
| GitHub Copilot Coding Agent | [Setting up MCP servers in a repository](https://docs.github.com/en/copilot/how-tos/agents/copilot-coding-agent/extending-copilot-coding-agent-with-mcp#setting-up-mcp-servers-in-a-repository)
---
## Currently Supported Tools
- `get-nuget-solver`: Fix all your package vulnerable version by updating your packages (direct and transitive) to the best compatible non-vulnerable version.
- `get-nuget-solver-latest-versions`: Fix all your package vulnerable version by updating your packages (direct and transitive) to the latest compatible non-vulnerable version.
- `get-latest-package-version`: Gets the latest version of a NuGet package.
- `get-package-readme`: Gets the README for a NuGet package and returns it as markdown.
- `update-package`: Updates installed packages to the specified version if compatible with the project configuration. It will also install/update packages needed to complete the operation.

## Support

If you experience an issue with the NuGet MCP server or have any other feedback, please open an issue on the [NuGet GitHub repository](https://github.com/NuGet/Home/issues/new?template=MCPSERVER.yml).
Please provide the requested information in the issue template so that we can better understand and address your issue or suggestion.
