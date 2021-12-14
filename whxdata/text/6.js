rh._.exports({"0":[["UG_PRJ_Project_Amendments_QA"]],"1":[["\n  ","\n    ","\n      \n    ","\n  ","\n  ","\n  ","\n    "],["\n    "],["\n    ","\n      ","\n        ","All budget amendments, whether they require donor approval or not, and regardless of the value and complexity, are processed in Integra","\n      ","\n      ","\n        ","Budget holders play an important role in the budget revision process","\n      ","\n      ","\n        ","There is a standardized Budget Template used for preparing and amending Integra budget upload files","\n      ","\n      ","\n        ","All budget revisions are submitted to workflow for approval","\n      ","\n      ","\n        ","After workflow approval is complete, Finance posts all amended budgets to the budget register in Integra.","\n      ","\n    ","\n    "],["\n    ","\n    "],["\n    ","- ","The OTIS process for D1 updates is the same as before Integra","\n    ","- ","Amendments typically initiated in OTIS include:","\n    ","\n      ","Restricted Projects"," where the change requires donor approval.","\n      ","Temporary Restricted Projects"," where there is a change in the receiving unit (D4 – HQ Unit/D5 – CRRD/RAI field legal entity) regardless of whether donor approval is required or not.","\n      ","Multi-entity Projects"," (Restricted and Temporary restricted funding) regardless of whether donor approval is required or not, particularly when there is a change in the receiving unit (D4 – HQ Unit/D5 – CRRD/RAI field legal entity). This ensures that the updated award/obligated amounts are reflected accurately in each Integra entity.","\n      ","Sub award sub projects"," where a new sub award is added to the parent project or there is an amendment to sub award budgets. This would apply to all sub award sub projects regardless of the funding source and whether donor approval is required or not.","\n    ","\n    ","- ","For amendments processed in OTIS, the following fields on the D1 overview page transfer to Integra:","\n    ","\n      ","End date","\n      ","Total obligated amount","\n      ","Total award amount","\n      ","Receiving units (D4 and/or D5 financial dimension).\n        ","\n          ","The D5 receiving unit determines the Integra legal entity to which the project information from the OTIS interface is sent.","\n          ","The D4 receiving unit determines which HQ D4, within the HQ Integra legal entity, is allocated funds for the project. It is important to note that while OTIS holds each budget allocation by D4, Integra only brings over the Total budget amount.","\n        ","\n      ","\n    ","\n    ","- ","For sub award sub projects initiated in OTIS, the following fields from the sub award D1 extension page transfer to Integra:","\n    ","\n      ","D1 Extension/Sub-Project ID","\n      ","Legal Entity/Company","\n      ","Project Name and Sub-award Vendor","\n      ","Actual Start Date ","\n      ","Actual End Date ","\n      ","Total Award Amount ","\n      ","Obligated Amount ","\n    ","\n    ","- ","Change in project stage","\n    ","\n      ","When the budget revision checkbox is flagged on the D1 update in OTIS, there is an automatic update to the project stage in Integra (from ‘Active’ to ‘Budget Revision’). The change in the project stage alerts Finance that a project budget revision has been processed in OTIS and is ready to be updated in Integra.","\n      ","When Finance finalizes the posting of the revised budget register entry, adds new project categories (if applicable) and amends the funding limits (if applicable), the project stage must be changed back to ‘Active’.","\n      ","If a project amendment does not include a change in the budget, the project stage remains ‘Active’ in Integra.","\n    ","\n    ","‎","\n    "],["\n    "],["\n    ","- ","Budget re-alignments not requiring donor approval are not typically managed in OTIS. These would include:","\n    ","\n      ","Restricted Projects – those single entity projects where, if required and approved, the same process is followed in Integra as other amendment types, however, they are not typically initiated in OTIS. E.g., an office has a USAID grant and they want to move budget lines between Health and Protection or from one field site to another field site.","\n      ","Temporary Restricted Projects – those projects in one D4 and/or D5 that have a budget change not requiring donor approval.","\n      ","Unrestricted Projects – managed by the FP&A unit directly in Integra.","\n      ","Multi- Entity Projects –whilst these projects are implemented in multiple legal entities, when there is a change to a single entity budget that does not require donor approval and does not change budget allocations per receiving unit i.e D5 and/or D4.","\n    ","\n    "],["\n    "],["\n    ","The ","Budget Template"," is a standardized template used to develop and amend project budgets.","\n    ","The ","Budget Template"," is used for amending all project budgets - restricted, unrestricted, and temporary restricted.","\n    ","There are two Integra budget development template folders available on Box:","\n    ","\n      ","Standard Project Category Template","\n      ","Unique Project Category Template","\n    ","\n    ","Ensure you are using the correct template!","\n    ","\n      ","All unrestricted projects use standard project categories","\n      ","Temporary restricted may use either standard or unique project categories; this is a judgment call based on the specific project.","\n      ","Restricted projects may use unique or standard project categories. Examples of when each would be used are listed below.\n        ","\n          ","US Gov – use standard project categories","\n          ","European (ECHO funding) - use unique project categories","\n        ","\n      ","\n    ","\n    ","The main types of budget revisions done in the ","Budget Template ","include the following:","\n    ","\n      ","Adding or removing budget lines (project categories)","\n      ","Re-allocating budget amounts between existing budget lines","\n      ","Adding or removing a sub-project","\n      ","The revised budget information provided to Finance is captured within the Input tab sheet and the Data Source sheet of the ","Budget Development Template",".","\n    ","\n    "],["\n    ","When a sub award was not final when the parent project was initially set up, but details are now known, the parent project requires an amendment to include the sub-award sub-project budget at the level of detail required.","\n    ","Once sub award budget details are known, the sub award agreement has been processed and the D1 extension code has been issued in OTIS, a sub-project is created in Integra with sub award information from OTIS. The partner name assigned to the sub award in OTIS is linked to the sub-awardee vendor name in Integra.","\n    ","At this point, finance needs to reverse the placeholder lump sum budget line out of the parent project and add detailed budget lines to the sub project","\n    ","\n      ","Main account 76000 is used for sub-awards totaling less than $25,000.00.","\n      ","Main account 76001 is used for sub-awards totaling greater than $25,000.00","\n    ","\n    ","When setting up the sub award budget as part of the sub project (D1_extension), the sub award budget in Integra should reflect the actual detailed sub award budget.","\n    ","In most cases, the detailed sub award budget follows the IRC budget categories and these should also be used to distinguish between sub award salaries, benefits, travel, equipment, program supplies, administrative costs etc.","\n    "],["\n    "],["\n    ","Use this procedure to enter amendment information into the ","Budget Template",".","\n    "],["\n    ","\n      ","All required amendment information is known.","\n    ","\n    "],["\n    ","\n      ","Create a copy of the original completed ","Budget Template"," and save it in an “Amendments” folder on local drive or Box drive.","\n      ","Open the copy of the ","Budget Template ","and make/save changes.","\n    ","\n     \n    "],["\n    ","\n      ","Finance"," uploads amended budgets to Integra.","\n    ","\n    "," ","\n    "],["\n    "],["\n    ","Use this procedure to upload amended Project Category, Budget Register, and Funding Limit templates to Integra.","\n    "],["\n    ","\n      ","Using the standard file upload function in Box, upload the completed template to the target Box location.","\n      ","Validate the file has disappeared from the Box folder. This indicates the upload has taken place.","\n      ","Review the email sent that indicates if the upload was successful or not.","\n      ","View/validate the uploaded information in Integra.","\n    ","\n    "],["\n    ","\n      ","Up","date information in Integra, as required.","\n      ","Sub","mit amended budget for approval by Finance using Workflow.","\n    ","\n    "],["\n    "],["\n    ","Finance uses this procedure to identify and complete any required updates directly in the Integra project form. Depending on the amendment, the following tasks may need to be done to complete the amendment.","\n    ","\n      ","Submit budget to workflow for approval and repost to General Ledger.","\n      ","Change the project stage back to “Active”","\n      ","Remove preaward classification","\n      ","Change the emergency classification.","\n      ","Invalidate project categories.","\n    ","\n    "],["\n    ","\n      ","Amended templates have been uploaded to Integra. E.g., Budget Register, Project Category, and Funding Limits (if applicable)","\n    ","\n    "],["\n    ","\n      ","As required, complete the following tasks in the project form:","\n    ","\n    ","\n      ","\n        ","\n          ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","If you need to…","\n            ","\n            ","\n              ","Then…","\n            ","\n          ","\n          ","\n            ","\n              ","Submit amended budget to workflow for approval…","\n            ","\n            ","\n              ","From Integra home page, navigate ","Modules ",">"," Budgeting ",">"," Budget register entries",".","\n              ","Locate and click the relevant budget entry number.","\n              ","On the top menu, click ","Workflow"," and select ","Submit"," .","\n              ","In the Comment box, enter a comment and click ","Submit",".","\n              ","Once approved, repeat step 1 and 2 above and click ","Update Budget Balances"," on the top menu.","\n            ","\n          ","\n          ","\n            ","\n              ","Update the project stage back to “Active”.","\n            ","\n            ","\n              ","From Integra home page, navigate to ","Project management and accounting ",">"," All projects",".","\n              ","Search for and open the target project.","\n              ","Under the ","MAINTAIN"," section of the action pane, click ","Project stage"," and select ","Active",".","\n            ","\n          ","\n          ","\n            ","\n              ","Remove pre-award classification …","\n            ","\n            ","\n              ","From Integra home page, navigate to ","Project management and accounting ",">"," All projects",".","\n              ","Search for and open the target project.","\n              ","Scroll down to the ","Sorting fields"," section of the project form.","\n              ","in the ","Sort field 2"," field delete the entry if not applicable.","\n            ","\n          ","\n          ","\n            ","\n              ","Change the emergency classification for the project….","\n            ","\n            ","\n              ","From Integra home page, navigate to ","Project management and accounting ",">"," All projects",".","\n              ","Search for and open the target project.","\n              ","Scroll down to the ","Sorting fields"," section of the project form.","\n              ","in the ","Sort field 1"," field select the relevant option from the drop-down list.","\n            ","\n          ","\n          ","\n            ","\n              ","Invalidate project categories…","\n            ","\n            ","\n              ","From Integra home page, navigate to ","Project management and accounting > All projects",".","\n              ","Search for and open the target project.","\n              ","Click ","PLAN"," on the action menu at the top.","\n              ","Under the VALIDATION section of action pane, click ","Assign"," categories.","\n              ","In the SELECTED CATEGORIES list on the right, select the ","checkbox"," next to any project categories that represent restricted costs. ","\n              ","Click the ","back arrow"," to move the category(s) to the REMAINING CATEGORIES list on the left.","\n            ","\n          ","\n        ","\n      ","\n    ","\n    "," ","\n    "],["\n    ","n/a","\n    "],["\n    "],["\n    ","\n      ","\n        ","\n          ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","Amendment Type","\n            ","\n            ","\n              ","Process Steps in Integra","\n            ","\n          ","\n          ","\n            ","\n              ","Donor-approved No Cost Extension (NCE)","\n            ","\n          ","\n          ","\n            ","\n              ","\n                ","Change in end date","\n                ","No change to total budget amount","\n                ","There may be budget re-alignment between existing budget lines","\n              ","\n            ","\n            ","\n              ","1.The end date in Integra is automatically updated via OTIS interface.","\n              ","2.If there is realignment of budget amounts, the budget revision box is selected in OTIS and the project stage in Integra is automatically updated to “Budget revision” via OTIS interface","\n              ","\n                ","If there is no change to budget, project stage remains “Active”.","\n              ","\n              ","3. Amend the ","Budget Development Template"," and send to Finance","\n              ","\n                ","Add new project categories and re-calculate project category group totals, if applicable","\n                ","Revise funding limits, if applicable","\n              ","\n              ","4.Amend the Project Summary form and submit to Finance.","\n              ","5. Once ","Budget Development Template"," is approved/edited by Finance, upload the completed project templates to Integra.","\n              ","6. Finance submits revised budget to workflow in Integra.","\n              ","7. Once approved in workflow, Finance posts revised budget to the General Ledger","\n              ","8. Finance completes related fields for amendment in Integra and changes project stage back to \"Active\"","\n              ","9.  Finance informs budget owner/Programs/Grants that amendment is complete.","\n            ","\n          ","\n          ","\n            ","\n              ","Donor-approved Cost Extension / Funding Increase (On Estimated and/or Obligated Budget)","\n            ","\n          ","\n          ","\n            ","\n              ","\n                ","Change or no change in end date","\n                ","Total estimated and/or obligated budget increased","\n                ","Amounts added to existing budget lines and/or new budget lines added","\n              ","\n              "," ","\n            ","\n            ","\n              ","1. The end date in Integra is automatically updated via OTIS interface.","\n              ","2. Total award amount and/or obligated amount is automatically updated via OTIS interface.","\n              ","3. The budget revision box is checked in OTIS and the project stage in Integra is automatically updated to “Budget revision” via OTIS interface","\n              ","4. Revise the ","Budget Development Template"," and send to Finance","\n              ","\n                ","Add new project categories and re-calculate project category group totals, if applicable","\n                ","Revise funding limits, if applicable","\n              ","\n              ","5. Revise the ","Project Summary"," form and email to Finance.","\n              ","6. Once the revised ","Budget Development Template"," is approved/edited by Finance, upload the completed project templates to Integra.","\n              ","7. Finance submits revised budget to workflow in Integra.","\n              ","8. Once approved in workflow, Finance posts revised budget to the General Ledger","\n              ","9. Finance completes related fields for amendment in Integra and changes project stage back to \"Active\"","\n              ","10. Finance informs budget owner/Programs/Grants that amendment is complete.","\n            ","\n          ","\n          ","\n            ","\n              ","Donor approved Budget Revision","\n            ","\n          ","\n          ","\n            ","\n              ","\n                ","No change to end date","\n                ","No change to total budget amount","\n                ","Budget re-alignment between budget lines without changing the total budget","\n              ","\n            ","\n            ","\n              ","1. The budget revision box is checked in OTIS and the project stage in Integra is automatically updated to “Budget revision” via OTIS interface","\n              ","2. Revise the ","Budget Development Template"," and email to Finance.","\n              ","\n                ","Add new project categories and re-calculate project category group totals, if applicable","\n                ","Revise funding limits, if applicable","\n              ","\n              ","3. Revise the ","Project Summary"," form and email to Finance.","\n              ","4. Once the revised ","Budget Development Template"," is approved/edited by Finance, upload the completed project templates to Integra.","\n              ","5. Finance submits revised budget to workflow in Integra.","\n              ","6. Once approved in workflow, Finance posts revised budget to the General Ledger","\n              ","7. Finance completes related fields for amendment in Integra and changes project stage back to \"Active\"","\n              ","8. Finance informs budget owner/Programs/Grants that amendment is complete.","\n            ","\n          ","\n          ","\n            ","\n              ","Addition of Sub Award","\n            ","\n          ","\n          ","\n            ","\n              ","\n                ","Sub award added to parent project","\n                ","Main account 76000 is used for sub-awards totaling >$25,000.00","\n                ","Main account 76001 is used for sub-awards totaling <$25,000.00.","\n              ","\n              "," ","\n            ","\n            ","\n              ","1. Sub-award sub project is automatically created in Integra via the OTIS interface.","\n              ","Note:"," The project stage does not get updated in Integra from the OTIS interface for sub-awards.","\n              ","2. Revise the ","Budget Development Template"," to remove sub award amount from parent project categories.","\n              ","3. Add new sub project and all related project categories with designated amounts.","\n              ","4. Apply funding limits to sub project, if applicable.","\n              ","5. Email revised ","Budget Development Template"," to Finance for review.","\n              ","6. Once the revised ","Budget Development Template"," is approved/edited by Finance, Finance upload the completed project templates to Integra.","\n              ","7. Finance submits revised budget to workflow in Integra.","\n              ","8. Once approved in workflow, Finance posts revised budget to the General Ledger","\n              ","9. Finance informs budget owner/Programs/Grants that amendment is complete.","\n            ","\n          ","\n          ","\n            ","\n              ","Internal Budget Re-alignment (not requiring donor approval)","\n            ","\n          ","\n          ","\n            ","\n              ","\n                ","Field Single Legal Entity project","\n                  Budget re-alignment between budget lines/ categories without changing the total budget and where donor approval is not required.","\n                ","HQ Single Legal Entity project","\n                  Budget amounts re-allocated from one receiving unit (HQ D4) to another receiving unit (HQ D4), within the same HQ legal entity without changing the total budget OR changes to one HQ D4 budget lines without changing the total D4 allocation.","\n                ","Multi Legal entity project","\n                  Budget amounts re-allocated from one receiving unit (D5) to another receiving unit without changing the total budget OR budget lines changed within the one receiving unit (D5) without changing allocations per receiving unit..","\n              ","\n            ","\n            ","\n              ","1."," ","Revise the ","Budget Development Template"," to reflect the budget revision","\n              ","\n                ","Add new project categories and re-calculate project category group totals, if applicable","\n                ","Revise funding limits if applicable","\n              ","\n              ","2. Send revised ","Budget Development Template"," to Finance for review.","\n              ","3. Once the revised ","Budget Development Template"," is approved/edited by Finance, upload the completed project templates to Integra.","\n              ","4.  Finance submits revised budget to workflow in Integra.","\n              ","5. Once approved in workflow, Finance posts revised budget to the General Ledger","\n              ","6. Finance informs budget owner/Programs/Grants that amendment is complete.","\n              ","Additional Notes:","\n              ","- ","For multi HQ unit projects within the one HQ legal entity, the revised funding amounts per receiving unit (D4) are updated in OTIS. However, only the total award amount is brought over to Integra.","\n              ","- ","For multi legal entity projects, the revised funding amounts per receiving unit (D5) are updated in OTIS. The revised total award amount per D5 is brought over to Integra.","\n              ","- ","Other internal budget revisions are processed directly in Integra","\n            ","\n          ","\n        ","\n      ","\n    ","\n    "," ","\n  ","\n\n","\n  ","\n    ","                                                                                       \n      ","\n","\n","            ","rescuenet.rescue.org/i/integra-support","\n    ","\n  ","\n\n"]],"2":[["Business Process Information"]],"3":[["Key Messages"],["Roles and Responsibilities Matrix"],["Amendments Initiated in OTIS"],["Amendments Not Initiated in OTIS"],["Using the Budget Template"],["Addition of Subaward Sub-project as Amendment"],["Populate the Budget Development Template for an Amendment"],["Upload Amended Project Templates to Integra "],["Update Project Information in Integra "],["Appendix"],["Amendment Types and Process Steps in Integra"]],"4":[["Purpose"],["Prerequisites"],["Steps"],["Next Steps"],["Purpose"],["Steps"],["Next Steps"],["Purpose"],["Prerequisites"],["Steps"],["Next Steps"]],"5":[["Note",": When a project was created in OTIS with the ","incorrect"," legal entity, and the correction is made in OTIS, the correction ","does no","t flow through to Integra. Therefore, Integra must be manually updated to remove the wrong project from Integra."],["Note",": Finance still needs to approve all internal amendments to any budget and its funding limits before uploading to Integra."]],"id":"6"})