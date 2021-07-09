rh._.exports({"0":[["Developing Project Budget Templates"]],"1":[["\n  ","\n    "," ","\n  ","\n  ","\n  "],["\n  ","This section outlines key terms and business process information for developing project budget templates for Integra.","\n  "],["\n  ","\n  "],["\n  "],["\n  ","Budget holders and designates have a responsibility to provide Finance with budgets. They are responsible for populating the standard Budget Development Template with all the required budget information.","\n  ","Project budgets are subject to workflow approval.","\n  ","For restricted projects at HQ, all budgets submitted to workflow are approved by the PQU Support group in Finance.","\n  ","For all unrestricted projects and those temporary restricted projects at HQ managed by FP&A, FP&A submit all budgets to workflow within their group. Budget workflows are approved by the Senior Director, Financial Planning and Analysis.","\n  ","For the remaining temporary restricted projects at HQ managed by the Finance - PQU Support group, all budgets submitted to workflow are approved by this group.","\n  ","For CRRD and RAI, Finance submits budgets to workflow and they are approved by the Finance Controller or designate.","\n  ","Funding limits are not applicable to unrestricted and temporary restricted projects.","\n  "],["\n  ","Integra is using sub-projects in the following two ways:","\n  ","To identify subaward sub-projects","\n  ","To Identify non-subaward sub-projects","\n  ","Both types of sub-projects are auto-assigned a D1 extension code (a numeric value tagged onto the end of the project ID). The example below highlights the naming convention relative to the project ID/D1.","\n  ","\n  ","The two types of sub-projects get created in Integra as outlined below:","\n  ","A subaward sub-project D1 extension code is created centrally in OTIS and automatically flows to Integra via the OTIS/Integra interface.","\n  ","A D1 extension is required for all subaward su-projects, regardless of the subaward budget value","\n  ","A non-subaward sub-project D1 extension code is created manually in the relevant Integra reporting entity.","\n  "],["\n  "],["\n  ","All fixed assets that are expensed to a project must be assigned a project category that is linked to a “Donor Asset Group”. This is done during project setup when project categories are either assigned (standard categories) or are created (unique categories). The process achieves the same objective and assigns a donor asset group to a specific project category. However, the steps to assign the donor asset group differs for the Unique Category Project Budget Development Template and the Standard Category Budget Development Template.","\n  ","Unique Category Project Budget Development Template: This template is mainly used in CRRD where donor reporting formats are determined by the donor. If there are project budget lines set up to procure donor assets in the project budget, the Unique Categories Project Budget Development Template automatically assigns the “Donor Asset Group” in the Project Category worksheet when the following main accounts are entered into the Data Source tab.","\n  ","\n    ","\n      ","Asset Group Table","\n      ","\n        ","\n        ","\n        ","\n      ","\n      ","\n        ","\n          ","\n            ","Main Account","\n          ","\n          ","\n            ","Main Account Description","\n          ","\n          ","\n            ","Asset Group","\n          ","\n        ","\n        ","\n          ","\n            ","74101","\n          ","\n          ","\n            ","<$5K IT Equipment","\n          ","\n          ","\n            ","DITUNDR5K","\n          ","\n        ","\n        ","\n          ","\n            ","74102","\n          ","\n          ","\n            ","<$5K Other Equipment","\n          ","\n          ","\n            ","DOTUNDR5K","\n          ","\n        ","\n        ","\n          ","\n            ","74103","\n          ","\n          ","\n            ",">=$5K Equipment & Furniture","\n          ","\n          ","\n            ","DEQFOVER5K","\n          ","\n        ","\n        ","\n          ","\n            ","74130","\n          ","\n          ","\n            ","Vehicles Purchase","\n          ","\n          ","\n            ","DVEHICLES","\n          ","\n        ","\n        ","\n          ","\n            ","85000","\n          ","\n          ","\n            ","CIK Asset (Non-Depreciable)","\n          ","\n          ","\n            ","CIKASSETNO","\n          ","\n        ","\n      ","\n    ","\n  ","\n  "," ","\n  ","The project categories tagged with the “Donor Asset Group” (from table above) will be uploaded into Integra. The relevant project category is selected at the time of procuring the asset and the asset tag (from the Asset Group table above) on the project category will flow through to the purchase order.","\n  ","Once the asset has been received and the product receipt has been recorded in Integra, the system will automatically create the asset record in the Fixed Assets module and will assign a penny value to the asset.","\n    ‎","\n  "],["\n  ","\n  "],["\n  ","The Budget Development Template is a standardized template used to develop and amend project budgets.","\n  ","The Budget Development Template has numerous macros and formulas that streamline the population of the project templates that get uploaded to Integra.","\n  ","Be sure to read ALL the information on the Instructions sheet of template. (1st tab in file)","\n  ","There are also further user instructions built into each column of the sheets that need to be populated.","\n  ","There are two Integra budget development template folders available on Box:","\n  ","\n    ","Standard Project Category Template","\n    ","Unique Project Category Template","\n  ","\n  "],["\n  ","All unrestricted projects use standard project categories","\n  ","Temporary restricted may use either standard or unique project categories; this is a judgment call based on the specific project.","\n  ","Restricted projects may use unique or standard project categories. Examples of when each would be used are listed below.","\n  ","\n    ","US Gov – use standard project categories","\n    ","European (ECHO funding) - use unique project categories","\n  ","\n  "," ","\n  "],["\n  ","Use this procedure to extract the donor budget lines required for the Integra Budget template. This makes it easy to use the copy/paste function for efficient template population.","\n  ","For projects using standard project categories, the donor budgets are presented to the donor in the IRC internal budget format. When populating the project development template, it’s an easy copy/paste to assign the standard project categories because it is all the same format. ","\n  ","For projects using unique categories, the original budget is always prepared in the IRC internal budget template. Those budget lines are then mapped to the donor budget format which usually mirrors the donor reporting format.  In these situations, population of the project development template should not follow the IRC format because that format does not follow the donor budget/reporting format required.","\n  "],["\n  ","Download the approved donor budget from OTIS.","\n  ","Copy and paste all lines from the donor budget into a new blank Excel sheet.","\n  ","In the new Excel sheet, remove all columns and rows from the donor budget that are not required for the Integra Budget Development template. Below are some examples of rows to remove:","\n  ","\n    ","Rows with heading titles","\n    ","Rows with sub-total information","\n    ","Rows without dollar amounts","\n    ","Rows not required for donor reporting requirements","\n    ","Any other extraneous rows not required for the Integra budget development template.","\n  ","\n  "],["\n  "],["\n  "],["\n  ","Use this procedure to populate the Budget Template file. This file has several built-in formulas and macros that enable efficient and accurate population of all the required upload files.","\n  ","Excel Requirements and Recommendations:","\n  ","Do NOT modify or delete any of the rows and column headers in the Budget Development Template.","\n  ","Always enable macros in template when prompted.","\n  ","Turn off the automatic calculation option. On the Excel toolbar, navigate to Formulas ",""," Calculation Options and select Manual.","\n  "],["\n  ","Data entry is only required in the red tabbed worksheets of the file.","\n  ","Only fields highlighted in yellow can be populated.","\n  ","There are completion instructions for each of these fields when mouse is hovered on the column header.","\n  ","Once all relevant yellow fields are completed in a sheet, follow the instructions in the blue arrows to proceed through the sheets of the file.","\n  ","If/when copying and pasting information from a different file, use “paste special“ option so data copies over in an unformatted state.","\n  "],["\n  ","\n    ","Download the relevant budget development template from Box location.","\n    ","Populate the Budget Development Template according to instructions embedded in the actual template file.","\n  ","\n  "],["\n  "],["\n  "],["\n  ","Use this procedure to prepare and name the upload files that were auto populated from the Budget Development Template.","\n  "],["\n  ","\n    ","Open the upload templates from the local drive.","\n    ","Validate the upload files were opened and populated from the Budget Development Template source file.","\n    ","After the files are opened, clicking the grey action button within each of the sheets should have actioned the auto-population of data from the source file.","\n    ","“Clean up” the file by removing any extraneous rows and columns.","\n    ","Save all the files back to the target hard drive location using the following naming convention requirements. (without brackets)\n      ","\n        ","[Project ID] [Name of upload file]-[Legal Entity].xlsx","\n      ","\n    ","\n  ","\n  ","Example of required naming convention for uploads to work:","\n  ","\n    ","EX102 ProjectCategory-9IRC.xlsx","\n    ","EX102 BudgetRegister-9IRC.xlsx","\n    ","EX102 FundingLimit-9IRC.xlsx","\n  ","\n  "],["\n  "],["\n  "],["\n  "],["\n  ","Use this procedure upload the completed templates to Box.","\n  "],["\n  ","\n    ","Using the standard file upload function in Box, upload the completed template to the target Box location.","\n    ","Validate the file has disappeared from the Box folder. This indicates the upload has taken place.","\n    ","Review the email sent that indicates if the upload was successful or not.","\n    ","View/validate the uploaded information in Integra.","\n  ","\n  "," ","\n  "],["\n\n","\n  ","\n    ","                                                                                                      rescuenet.rescue.org/i/integra-support","\n  ","\n\n"]],"2":[["Business Process Information"]],"3":[["Project Setup Process Flow"],["General Guidelines for Budget Development"],["Sub-projects"],["Developing Asset Budget Lines"],["Roles and Responsibilities"],["The Budget Development Template"],["Populate the Budget Development Template"],["Purpose"],["Prepare and Rename Upload Files for Integra (Finance Function Only)"],["Upload Completed Project Templates to Integra (Finance Function Only)"]],"4":[["Purpose"],["Steps"],["End of procedure","\n    ‎"],["Steps"],["End of procedure","\n    ‎"],["Purpose"],["Steps"],["End of procedure","\n     "],["Purpose"],["Steps"],["End of procedure"]],"5":[["Note: Depending on location, step #2 may be done by Finance, budget owners (or designate), or Programs."],["Note: As Integra only allows one naming convention, Finance teams must ensure the description of the sub-project clearly distinguishes between an organization name and a field site or program sector."],["Note: Ensure you are using the correct template!"],["Note: This makes the completion of the template much faster. Otherwise, the file “spins” for a lengthy period of time after every entry/update is made. When you are done making changes within a sheet, change it back to Automatic to apply updates to correlated sheets."],["Note: The dash and legal entity must be at the end of the name, with no spaces between the description and the dash (and beyond) in order for the upload to work."]],"id":"6"})