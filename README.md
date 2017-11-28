# Scenario
Scenario is a Qlik Sense Extension for manipulating variables and allowing them to be returned to a default value when performing tasks such as what-if analysis in conjunction with the Qlik Associative Engine.

## Getting Started
1. Download the latest release and install on your Qlik Sense server or desktop
1. Add the extension to your application sheet
1. Create the variables using the variable panel in Qlik Sense, providing a default value or expression for the variable
1. Open the properties panel for the extension and select the "Variables List" section, for each variable you want to manage using the extension, click "Add Variable" and select the variable from the list.
  1. For each variable give it a user friendly label
  1. Set the default value (this should be the same definition as the original variable)
  1. Choose additional options (see explanations below)
1. Repeat for each variable you wish to add

## Operating the extension in analysis mode

Each variable is made up of 4 parts, labelled 1 to 4 in the diagram.

![Alt text](help.png?raw=true "Image showing the on screen functions")

1. The variable label, provided to assist the end user understand what they are setting.

1. The variable value, this is an entry box which can be changed by the end user. Changes made are updated after the user leaves focus from the text box, or after 2 seconds of not typing.

1. The variable default value which will be displayed if the variable value is different. Clicking this button will reset the single variable to this value.(This function can be disabled with the variable property "Allow Variable Single Update")

1. The previous user defined value, allowing this to be toggled between along side the default value. This will only be displayed if a user defined value has been set within this user session. (This function can be disabled with the variable property "Show Users Previous Value")

Finally there is a button which will reset all variables to the default value.
