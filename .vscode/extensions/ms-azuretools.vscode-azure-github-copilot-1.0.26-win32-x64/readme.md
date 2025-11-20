# What's GitHub Copilot for Azure?

GitHub Copilot for Azure is an Azure extension available in Visual Studio Code. It integrates support for GitHub Copilot agent and ask modes. Use Azure tools in agent mode to automatically complete Azure tasks, or chat with @azure in ask mode to get help with Azure services, development for Azure, and Azure DevOps tasks. Go to the [release notes](https://aka.ms/azcode/copilot/changelog) for details on the latest updates.

![image](https://github.com/microsoft/GitHub-Copilot-for-Azure/raw/HEAD/resources/readme/agentModeIntro.gif)

![image](https://github.com/microsoft/GitHub-Copilot-for-Azure/raw/HEAD/resources/readme/intro.gif)

> **Note:** GitHub Copilot for Azure currently only supports Windows x64, Windows ARM64, macOS x64, macOS ARM64 and Linux x64.

## Agent mode

Agent mode can help you with completing Azure-related tasks by automatically using tools from GitHub Copilot for Azure. You can let agent mode decide on those tools, or you can guide the process by choosing particular tools from the GitHub Copilot for Azure toolset.
GitHub Copilot for Azure tools are:

### General

- **`#azure_get_code_gen_best_practices`:** Returns a list of best practices for code generation and operations when working with Azure. It is applicable to various Azure technologies and programming languages.

- **`#azure_get_deployment_best_practices`:** Returns a list of best practices to follow when deploying to Azure or preparing an application for deployment to Azure.

- **`#azure_get_azure_function_code_gen_best_practices`:** Returns a list of best practices for code generation and operations when working with Azure Functions.

- **`#azure_get_swa_best_practices`:** Returns a list of best practices for code generation and operations when working with Azure Static Web Apps.

- **`#azure_query_learn`:** Gets relevant documentation and samples searching Microsoft Learn to answer your query. It provides knowledge of Azure/Microsoft products, compares features of other cloud platforms with Azure, or assists in moving to Azure from another platform.

- **`#azure_generate_azure_cli_command`:** Generates Azure CLI commands based on the given intent. It is used when you explicitly asks for help with, or examples for, using the Azure CLI, or when Azure CLI commands are needed to complete another task.

- **`#azure_diagnose_resource`:** Diagnoses issues with resources including performance and failures by investigating logs, telemetry, and other performance sensors.

- **`#azure_azd_up_deploy`:** Provisions Azure resources and deploys the project to Azure using Azure Developer CLI (azd).

- **`#azure_get_azd_app_logs`:** Validates the app's live status by retrieving console logs from the log analytics workspace after deployment with Azure Developer CLI (azd).

- **`#azure_get_schema_for_Bicep`:** Provides the schema for the most recent apiVersion of an Azure resource, useful when creating or modifying resources in a bicep ARM template.

- **`#azure_get_terraform_best_practices`:** Returns best practices for Terraform on Azure.

- **`#azure_dotnet_template_tags`:** Gets the list of tags that can be used to filter the available dotnet templates.

- **`#azure_get_dotnet_templates_for_tag`:** Gets the list of dotnet project templates available for `dotnet new` commands that match the given tag.

- **`azure_describe_azure_mcp_cli_command`:** Returns a detailed description of all available Azure MCP CLI commands.

- **`azure_design_architecture`:** Interactively helps designing Azure cloud architecture through guided questions.

### Resource Information

- **`#azure_query_azure_resource_graph`:** Queries the Azure Resource Graph for information about resources, subscriptions, and resource groups that the you have access to. It is used to obtain detailed information about the your resources.

- **`#azure_get_regions_for_language_model`:** Finds out in what Azure regions a model is available, which is crucial before attempting to deploy a model.

- **`#azure_get_language_models_for_region`:** Discovers what type of AI models are available in an Azure region.

- **`#azure_get_language_model_deployments`:** Finds AI deployments in a given subscription, helping in locating the models that are deployed in the AI accounts and resource groups.

- **`#azure_get_language_model_usage`:** Gets data about Azure AI resource quota and usage in a particular subscription across Azure regions.

- **`#azure_recommend_service_config`:** Provides guidance for creating services and their dependent services detected from the project or asked by the user.

- **`#azure_check_pre-deploy`:** Ensures that the system is ready to run Azure Developer CLI (azd) and that Bicep files follow Azure Developer CLI (azd) best practices.

- **`#azure_config_deployment_pipeline`:** Returns guidance to create a CI/CD pipeline which provisions Azure resources and build and deploy applications to Azure.

- **`azure_check_region`:** Checks Azure region availability for the resources that are going to be deployed.

- **`azure_check_quota_availability`:** Checks Azure quota availability for the resources that are going to be deployed.

- **`azure_invoke_azure_mcp_cli_command`:** Invokes an Azure MCP CLI command based on the given intent. The Azure MCP CLI provides capabilities to operate on Azure resources that aren't supported by Azure CLI.

- **`azure_list_activity_logs`:** Lists activity logs for a specific resource over the given prior number of hours.

### Account Information

- **`#azure_get_auth_state`:** Gets the current state of authentication for the user, including which account you are signed in to and the current tenant used to query and work with resources.

- **`#azure_get_current_tenant`:** Gets the currently used tenant to query and work with resources.

- **`#azure_get_available_tenants`:** Gets a list of tenants available for querying and working with resources.

- **`#azure_set_current_tenant`:** Sets the tenant used to query and work with resources.

- **`#azure_get_selected_subscriptions`:** Gets a list of default/selected/current subscriptions, which belong to the current tenant, that are used for querying or working with resources.

- **`#azure_open_subscription_picker`:** Opens the subscription picker when the user wants to modify/change the default/selected/current subscriptions.

- **`#azure_sign_out_azure_user`:** Signs the user out of Azure.

## How do I use GitHub Copilot for Azure tools in agent mode?

![image](https://github.com/microsoft/GitHub-Copilot-for-Azure/raw/HEAD/resources/readme/setModeToAgent.png)

1. Set mode to **Agent** in Chat.
1. Select **Claude 3.7 Sonnet** instead of GPT-4o for agent mode scenarios. This helps improve the invocation of the GitHub Copilot for Azure tools.
1. Once the GitHub Copilot for Azure extension is activated, a notification will ask, **"Would you like @azure to add Azure-related instructions to this workspace's copilot-instructions.md file?"** Select **Yes.**
1. Try to include details in your prompts, especially about your Azure resources.

Alternatively, if you want to select a specific tool, you can say `#<name of the tool>`, followed by your prompt.
For general guidance on using agent mode, visit [Use Agent mode in VS Code](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode)

Examples of prompts:

- Create an Azure storage account and connect to a file upload app
- Deploy a local Python Flask app to Azure
- Create a ToDo web app and deploy it to Azure
- Create a bicep file to deploy a MySQL database to West US 3 region

## Ask mode

Ask mode can help you use natural language to interact with large language models to ask questions about the following Azure topics:

- **Learn about Azure:** @azure can help with your questions about a variety of Azure services and technologies, such as AI, compute, containers, databases, DevOps, network, security, and storage.

![image](https://github.com/microsoft/GitHub-Copilot-for-Azure/raw/HEAD/resources/readme/learn.gif)

- **Resource management:** @azure can help with getting information about your Azure resources, including summarizing resource usage and resource-specific questions.

![image](https://github.com/microsoft/GitHub-Copilot-for-Azure/raw/HEAD/resources/readme/resources.gif)

- **Diagnostics:** @azure can help diagnose problems with services, such as Azure API Management, Azure Cache for Redis, Azure Container Apps, Azure Functions, Azure Kubernetes Services, and the Web Apps feature of Azure App Service.

![image](https://github.com/microsoft/GitHub-Copilot-for-Azure/raw/HEAD/resources/readme/diagnose.gif)

- **Cost management:** @azure can help estimate historical Azure costs.

![image](https://github.com/microsoft/GitHub-Copilot-for-Azure/raw/HEAD/resources/readme/cost.gif)

- **Azure Developer CLI (azd) support:** @azure can help you search for application templates and will provide instructions for how to initialize, configure, and deploy.

![image](https://github.com/microsoft/GitHub-Copilot-for-Azure/raw/HEAD/resources/readme/deploy_init.gif)

- **Bicep template generation:** @azure can help create a Bicep template for building Azure infrastructure.

![image](https://github.com/microsoft/GitHub-Copilot-for-Azure/raw/HEAD/resources/readme/bicep.gif)

- **Terraform template generation:** @azure can help create a Terraform template for building Azure infrastructure.

![image](https://github.com/microsoft/GitHub-Copilot-for-Azure/raw/HEAD/resources/readme/terraform.gif)

- **Code Optimizations (preview):** @azure can help you fix Code Optimizations from your Application Insights resources.

![image](https://github.com/microsoft/GitHub-Copilot-for-Azure/raw/HEAD/resources/readme/code_optimizations.gif)

## How do I chat with @azure in ask mode?

![image](https://github.com/microsoft/GitHub-Copilot-for-Azure/raw/HEAD/resources/readme/setModeToAsk.png)

1. Set mode to **Ask** in Chat.
1. Enter **@azure** to begin the conversation.
1. Try to include details in your prompts, especially about your Azure resources, such as the specific resource and subscription ID. Ask follow-up questions if you need more information.

You can also find a shortcut in the context menu for items in the Azure Resources view.

Examples of prompts:

**Learn about Azure**

- @azure What kinds of AI services does Azure offer?
- @azure What’s the difference between Azure Container Apps and Azure Kubernetes Service?

**Resource management**

- @azure What’s the URL for my webapp named [insert name]?
- @azure How many storage accounts do I have in eastus?

**Diagnostics and troubleshooting**

- @azure Summarize the recent logs in my Azure Container Apps/Azure Kubernetes Service application
- @azure Help me diagnose a problem with Azure Kubernetes Service

**Cost management**

- @azure Can you show me the cost breakdown by service for Aug 2024 for my current subscription?
- @azure What was my most expensive resource last month?

**Azure Developer CLI (azd) support**

- @azure Help me deploy my azd template to the cloud
- @azure I'd like to build a Python web API with a MongoDB database and a React.js front end

**Bicep template generation**

- @azure Give me a Bicep template for creating a key vault, a managed identity, and a role assignment for the managed identity to access the key vault
- @azure Show me a Bicep template that creates an Azure Storage account with a blob container and a file share

**Terraform template generation**

- @azure Show me a Terraform configuration that creates a web app named "mywebapp"
- @azure Give me a terraform template to create a VM with a public IP address

**Code Optimizations (preview)**

- @azure Show me code optimizations for my Application Insights named "myappinsightsinstance"
- @azure Let's address the Code Optimizations GitHub Issue 123

## How do I get started?

To use GitHub Copilot for Azure you’ll need:

- An active GitHub Copilot license.
- The GitHub Copilot Chat extension.
- A Microsoft account.

New to Azure? Sign up for free and get a $200 credit to use on Azure services. [Learn more about Azure](https://www.azure.com)

## Privacy and preview terms

By using GitHub Copilot Chat, you agree to [GitHub Copilot Chat preview terms](https://docs.github.com/en/copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-chat-in-your-ide). Review the [transparency note](https://aka.ms/GitHubCopilotForAzureTransparency) to understand about usage, limitations, and ways to improve Copilot Chat during the technical preview.

Your code is yours. We follow responsible practices in accordance with our [Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) to ensure that your code snippets will not be used as suggested code for other users of GitHub Copilot.

To get up-to-date security fixes, use the latest version of the Copilot extension and Visual Studio Code.

## Telemetry

Visual Studio Code collects usage data and sends it to Microsoft to help improve our products and services. Read the [Microsoft Privacy Statement](https://www.microsoft.com/privacy/privacystatement) to learn more. If you don't want to send usage data to Microsoft, you can set the `telemetry.enableTelemetry` setting to `false`. Get more information in the [FAQ section](https://code.visualstudio.com/docs/supporting/faq#_how-to-disable-telemetry-reporting).

## More information about GitHub Copilot for Azure and GitHub Copilot

[Learn more](https://aka.ms/LearnAboutGitHubCopilotForAzure) about GitHub Copilot for Azure.

[Sign up](https://github.com/settings/copilot?utm_source=vscode-chat-readme&utm_medium=third&utm_campaign=2024q3-em-MSFT-signup) for a free trial of GitHub Copilot.

- If you're using Copilot for your business, learn more about [Copilot Business](https://docs.github.com/en/copilot/copilot-business/about-github-copilot-business) and [Copilot Enterprise](https://docs.github.com/en/copilot/github-copilot-enterprise/overview/about-github-copilot-enterprise).

Learn more about Responsible Use of [GitHub Copilot Chat in your IDE](https://docs.github.com/en/copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-chat-in-your-ide).
