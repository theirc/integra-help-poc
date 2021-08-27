rh._.exports({"0":[["Journal Entries DynAD Template Upload"]],"1":[["\n  ","\n    "," ","\n  ","\n  ","\n  "],["\n  "],["\n  ","\n  "],["\n  ","Refer to the following document on RescueNet for a comprehensive list of journal types and their usage:","\n  ","\n    ","Journal Types in Integra","\n  ","\n  "],["\n  ","The DynAd Template is a tool used to upload mass journal entries into Integra.","\n  ","The Dynad Template is particularly useful when Finance needs to post mass entries from one Integra legal entity general ledger to another. It also facilitates postings between different modules (sub ledgers), and between the general ledger and modules, within the same legal entity.","\n  ","\n    ","To/from different sub-ledger/modules","\n    ","To/from general ledger","\n    ","To general ledger from sub-ledger/modules","\n    ","To sub-ledger/modules from general ledger","\n  ","\n  ","General Rule:"," Use the DynAd Template if there are more than 10 journal entries that need to be uploaded, otherwise, create journal entries directly in Integra.","\n  ","The table below provides a comprehensive list of different from/to posting scenarios available using the DynAd Template:","\n  ","\n    ","\n      ","\n        ","\n        ","\n      ","\n      ","\n        ","\n          ","\n            ","Module/Account","\n          ","\n          ","\n            ","Module/Offset Account","\n          ","\n        ","\n        ","\n          ","\n            ","Ledger","\n          ","\n          ","\n            ","Vendor","\n          ","\n        ","\n        ","\n          ","\n            ","Ledger","\n          ","\n          ","\n            ","Bank","\n          ","\n        ","\n        ","\n          ","\n            ","Ledger","\n          ","\n          ","\n            ","Ledger","\n          ","\n        ","\n        ","\n          ","\n            ","Project","\n          ","\n          ","\n            ","Ledger","\n          ","\n        ","\n        ","\n          ","\n            ","Project","\n          ","\n          ","\n            ","Vendor","\n          ","\n        ","\n        ","\n          ","\n            ","Customer","\n          ","\n          ","\n            ","Bank","\n          ","\n        ","\n        ","\n          ","\n            ","Fixed Assets","\n          ","\n          ","\n            ","Ledger","\n          ","\n        ","\n        ","\n          ","\n            ","Bank","\n          ","\n          ","\n            ","Bank","\n          ","\n        ","\n        ","\n          ","\n            ","Project","\n          ","\n          ","\n            ","Bank","\n          ","\n        ","\n        ","\n          ","\n            ","Bank","\n          ","\n          ","\n            ","Vendor","\n          ","\n        ","\n        ","\n          ","\n            ","Customer","\n          ","\n          ","\n            ","Customer","\n          ","\n        ","\n        ","\n          ","\n            ","Project","\n          ","\n          ","\n            ","Customer","\n          ","\n        ","\n        ","\n          ","\n            ","Project","\n          ","\n          ","\n            ","Project","\n          ","\n        ","\n        ","\n          ","\n            ","Vendor","\n          ","\n          ","\n            ","Vendor","\n          ","\n        ","\n      ","\n    ","\n  ","\n  ","There are two different templates available to accommodate different currencies:","\n  ","\n    ","DynAd Journal Template ","(used for USD/Base currency transactions)","\n    ","DynAd Journal Template Other Amount"," (used for all non-USD currency transactions)","\n  ","\n  ","The difference between the two templates above is that there are two additional columns in the non-USD/Base version to account for the exchange rate type and the exchange rate used.","\n  "],["\n  ","On Import from the DynAd Template:","\n  ","\n    ","The transaction date determines which exchange rate to use, if re-classifying an entry from/to the current period.","\n    ","The amount in transaction currency is converted using the Integra rate and posted to the base/accounting currency amount field.","\n    ","Make sure the exchange rate is entered as a factor of 100. For example, an exchange rate entered as 1.1463 will be translated to 114.63 in the upload journal.","\n  ","\n  ","Additionally, currency clearing between currencies can also be done using the DynAd journal. This is often the case for cash receipt accounts for funds sent from HQ but received in local currency.","\n  "],["\n  "],["\n  ","Use this procedure to create a journal entry directly in Integra.","\n  ","This procedure may be used to post journal entries related to payroll, intercompany, accruals, prepaid allocations, advances, shared program cost allocations, vendors, customers, and re-classification entries.","\n  "],["\n  ","\n    ","Journal type is known (refer to the Journal Types in Integra document for a full list of journal types and usage)","\n    ","Financial dimensions are known","\n  ","\n  "],["\n  ","\n    ","Navigate modules to ","General ledger > Journal entries > General journals",".","\n  ","\n  ","\n  ","\n    ","On the menu at the top, click ","New",".","\n  ","\n  ","\n  ","\n    ","A row is added at the top of the table. In the ","Name ","field, click the drop-down arrow and select the relevant journal type from the selection list, e.g., JE (journal voucher); GL_IC (Intercompany transaction), etc.","\n  ","\n  ","\n  ","\n    ","In the ","Description ","field, overwrite the default text with a meaningful description of the journal.","\n  ","\n  ","\n  ","\n    ","On the menu at the top, click ","Lines",".","\n  ","\n  ","\n  ","\n    ","Validate that a new journal line has been added to the table. (If not, click ","New ","just above the table grid to add a line.)","\n    ","Complete/validate the following fields on the journal voucher line: ","\n  ","\n  ","\n    ","\n      ","\n        ","\n        ","\n      ","\n      ","\n        ","\n          ","\n            ","Field","\n          ","\n          ","\n            ","Entry Required","\n          ","\n        ","\n        ","\n          ","\n            ","Date","\n          ","\n          ","\n            ","Defaults to today’s date but may be overwritten.","\n          ","\n        ","\n        ","\n          ","\n            ","Voucher","\n          ","\n          ","\n            ","This is a system assigned number and cannot be changed. ","\n          ","\n        ","\n        ","\n          ","\n            ","Company","\n          ","\n          ","\n            ","This value defaults to the legal entity you are logged into but may be overwritten.","\n            ","If the entry is related to your current legal entity, do not change the company code.","\n          ","\n        ","\n        ","\n          ","\n            ","Account type","\n          ","\n          ","\n            ","If the journal entry is a ledger entry, leave the default value ","Ledger",".","\n            ","If the entry involves other subledger/modules such as project, customer, vendor, bank, or fixed assets, select the appropriate subledger/module from the drop-down selection list.","\n          ","\n        ","\n        ","\n          ","\n            ","Account","\n          ","\n          ","\n            ","The drop-down selection list in this field depends on the ","Account type"," previously selected.","\n            ","\n              ","If account type Ledger was selected the drop-down selection list displays main account and financial fields.","\n              ","If account type Customer was selected the drop-down selection list displays customer accounts.","\n              ","If account type Vendor was selected the drop-down selection list displays vendor accounts.","\n              ","If account type Project was selected, the drop-down selection list displays project IDs.","\n              ","If account type Bank was selected, the drop-down selection list displays a list of bank accounts for the legal entity.","\n            ","\n          ","\n        ","\n        ","\n          ","\n            ","Description","\n          ","\n          ","\n            ","Enter a meaningful description for the journal voucher line.","\n          ","\n        ","\n        ","\n          ","\n            ","Debit","\n          ","\n          ","\n            ","Completion of the ","Debit/Credit ","fields depend on the account type selected and the nature of the transaction.","\n          ","\n        ","\n        ","\n          ","\n            ","Credit","\n          ","\n          ","\n            ","Completion of the ","Debit/Credit ","fields depend on the account type selected and the nature of the transaction.","\n          ","\n        ","\n        ","\n          ","\n            ","Category","\n          ","\n          ","\n            ","This field is only displayed if ","Project ","was selected in the ","Account type"," field.","\n            ","In the ","Category ","field, select the appropriate category for your transaction. The project ID (D1) that was entered in the ","Account ","field determines the categories available in the list, i.e., you will only see those categories related to that project ID.","\n          ","\n        ","\n        ","\n          ","\n            ","Currency","\n          ","\n          ","\n            ","Leave the default to USD if you are transacting in dollars, otherwise update to the appropriate currency.","\n          ","\n        ","\n        ","\n          ","\n            ","Exchange rate","\n          ","\n          ","\n            ","The exchange rate field automatically defaults to the system period exchange rate of the currency that you chose to use.","\n            ","Note",": For currency re-classification entries, be sure to input the same exchange rate attached to the original transaction in the prior period. If you post without the original exchange rate and leave the field blank, the exchange rate in the system will automatically be applied.","\n          ","\n        ","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","\n    ","On the menu just above the table, click ","Financial dimensions"," and select ","Account ","from the drop-down selection list.","\n  ","\n  ","\n  ","\n    ","Complete the other required dimension field based on the IRC account structure. For example, a project transaction requires a D1-D2-D3-D4-D5-D6. The D7 is only required for salary and benefits.","\n  ","\n  "],["\n  ","\n    ","Close the financial dimensions window to return to the voucher lines screen.","\n  ","\n  ","\n  ","\n    ","To add the offset line, click ","New ","just above table grid.","\n  ","\n  ","\n  ","\n    ","Complete all required fields in the voucher line for the offset line.","\n    ","To enter financial dimensions for the offset line, click ","Financial dimensions"," and select ","Offset account",".","\n    ","Complete the financial dimensions for the offset line(s).","\n  ","\n  ","\n  ","\n    ","On the menu at the top of page, click ","Validate"," and select ","Simulate posting",".","\n    ","When posting simulation is confirmed, close the Journal voucher page to return to the Genera journals page.","\n    ","In the list of journals, select the journal just created and attach any supporting documentation. (Click the paperclip icon in the top-right corner)","\n    ","Finally, submit the journal to Workflow by clicking ","Workflow ","on the menu at the top of page.","\n  ","\n  "],["\n  ","You have created a journal entry in Integra.","\n  "],["\n  "],["\n  ","Use this procedure to create journals that will only require a few modifications in order to use them in the next accounting period. Commonly used examples for the periodic journals are allocations and prepaid expenses.","\n  "],["\n  "],["\n  ","\n    ","Financial dimensions are known.","\n  ","\n  "],["\n  ","\n    ","Navigate modules to ","General Ledger > Journal entries > Periodic journals",".","\n  ","\n  ","\n  ","\n    ","Click ","New ","and select ","PER_JE"," under the Name field.","\n    ","On the menu at the top, click ","Lines",".","\n  ","\n  ","\n  ","\n    ","In the ","Account type"," field, select the relevant option from the drop-down selection list.","\n    ","In the ","Account ","field, populate the field with the relevant entry.","\n    ","Enter a description in the ","Description"," field.","\n    ","Enter the amount in the ","Debit ","field.","\n    ","Click the ","Financial Dimensions"," tab.","\n  ","\n  ","\n  ","\n    ","Complete the relevant financial dimensions for the line and click ","OK",".","\n    ","Save the periodic journal.","\n  ","\n  "],["\n  ","You have created a periodic journal.","\n  "],["\n  ","To access the periodic journal you created previously, follow the steps below:","\n  ","\n    ","Go to ","General ledger > Journal entries > General journals",".","\n  ","\n  ","\n  ","\n    ","Click ","New",".","\n    ","Click ","Lines ","at the top toolbar.","\n  ","\n  ","\n  ","\n    ","On the menu at the top of page, click ","Period journal"," and select ","Retrieve journal",".","\n    ","In the pop-up window, under periodic journal number, select your periodic journal number that you created previously.","\n  ","\n  ","\n  ","\n    ","In the ","To date"," field, enter a date. This is the date when the journal is created.","\n  ","\n  ","\n  ","\n    ","In the ","Copy or move"," journal field, select ","Copy",".","\n    ","Click ","OK",".","\n    ","Make any required changes, if applicable.","\n    ","Update all other required fields in the voucher lines, e.g., invoice #, financial dimensions, etc.","\n    ","Click ","Save",".","\n    ","Submit journal to ","Workflow ","approval","\n  ","\n  "],["\n  ","You have created a journal entry form a periodic journal. Once approved, Finance posts the journal.","\n  "],["\n  ","Use this procedure to correct errors on main account codes or financial dimensions.","\n  ","This procedure reserves the original posting and recreates new ones.","\n  "],["\n  ","\n    ","Navigate to ","Project management and accounting > Projects > All projects",".","\n  ","\n  ","\n  ","\n    ","Search for and select the relevant project line.","\n    ","On the menu at the top of page, click ","Manage",", and select ","Posted transactions",".","\n  ","\n  ","\n  ","\n    ","Select the posted project transaction that requires adjustment and click ","Adjust accounting"," under the ","Process ","fast tab.","\n  ","\n  ","\n  ","\n    ","A dialog box opens that displays the current accounting entries at the top section of dialog box. Review the current entries.","\n    ","In the bottom section, enter a new main account and/or financial dimensions to recode transaction, as required.","\n    ","Scroll down to bottom of the dialog box.","\n  ","\n  ","\n  ","\n    ","Click ","Preview ","to ensure all values are correct then click ","Post ","to post the recode transaction.","\n  ","\n  "],["\n  ","You have adjusted the accounting on a posted project transaction.","\n  "],["\n  ","Recoding is typically done to correct errors on main account codes or financial dimensions.","\n  ","This task is done by Finance staff on a daily or monthly basis.","\n  ","Listed below are the various ways in which recoding can be done:","\n  ","Create a project adjustment journal","\n  ","\n    ","This is adjusting project transactions in the project sub ledger that will automatically adjust the corresponding general ledger posting.","\n    ","You can do project adjustment journals using the DynAd journal template for mass upload from the general ledger to the project subledger.","\n    ","You can adjust the transactions per project.","\n    ","You can adjust by batch.","\n  ","\n  ","Enter balance sheet account corrections","\n  ","\n    ","This is mainly used for correcting wrong account codes from the general ledger.","\n  ","\n  "],["\n  ","Adjusting project transactions per project in Integra steps:","\n  ","\n    ","Navigate to ","Project management and accounting > Projects > All projects",".","\n    ","Click ","Project ID ","and in the drop-down search for the project ID that you want to adjust (select “contains” for easy search).","\n  ","\n  ","\n  ","\n    ","Under ","Manage > Process,"," click ","Adjust transactions",".","\n  ","\n  ","\n  ","\n    ","On the menu at the top, click ","Select",". A pop-up window will appear.","\n    ","In the pop-up window, make sure that expense, item and/or fee are marked to Yes depending on the transaction type that you are planning to adjust.","\n    ","Under ","Project Date",", select or type ","From date"," and ","To date",". This is the date range for which you want to extract your transaction for adjustment.","\n    ","Under ","Ledger Date",", select or type the date. This is the period in which you want to post the adjustment.","\n    ","Scroll down to see the ","Records to include ","header. Records to include helps you to select multiple project IDs that you want to adjust at the same time. At this point, you will not use this function.","\n    ","Click ","OK",".","\n  ","\n  ","\n  ","\n    ","From the list of transactions, select those that you wish to adjust.","\n  ","\n  ","\n  ","\n    ","Click ","Adjust",".","\n    ","In the popup window, under ","Project ID",", type the project ID or D1 code where you wish to move the transaction.","\n    ","In the ","Category ","field, select the appropriate project category or D2 code that you want to adjust the transaction to.","\n    ","In the ","Line property",", select ","Billable ","or ","NonBill",".","\n  ","\n  "],["\n  ","\n    ","If you wish to allocate to multiple D1 codes, insert additional lines and change the percent column to the appropriate allocation key. Otherwise, leave it at 100.","\n    ","In the ","Employee code ","field type the employee D7 code. This is only required if you are adjusting transactions related to personnel.","\n    ","In the ","Reason code"," field, select the corresponding code for your adjustment.","\n    ","In the ","Reason comment ","field, you can override the default entry and type additional comments for the adjustment.","\n    ","Click ","OK",".","\n  ","\n  ","\n  ","You will see a split screen showing the transactions that you are adjusting at the bottom.","\n  ","\n  ","At the top of those transactions that you want to adjust, you can verify the financial dimensions. The financial dimensions will be automatically populated based on the previous coding. Therefore, you can modify the financial dimensions accordingly for each line.","\n  ","\n    ","Click ","Post ","on the menu at the top of page.","\n    ","Click ","OK"," in the window that opens.","\n  ","\n  ","\n  "],["\n  ","You have recoded a GL entry.","\n  "],["\n  ","Use this procedure to reverse a general ledger (GL) entry in Integra.","\n  ","Reversals can be used to reverse wrong entries in the GL and to later code them correctly.","\n  "],["\n  ","\n    ","After running the trial balance (see above), double-click the transaction in the ","Closing balance"," column that needs to be reversed.","\n    ","Click ","Reverse transaction",".","\n  ","\n  ","\n  ","\n    ","On the ","Transaction reversal ","screen, enter the ","Reversal posting date",".","\n    ","Click ","OK",".","\n  ","\n  ","\n  ","A message appears that the transaction has been reversed.","\n  ","\n    ","Click ","Reversed tracing",". The original and reversed transactions are displayed.","\n  ","\n  "],["\n  ","\n    ","Close the transaction by selecting ","X"," at the top right of the screen when the review is completed.","\n  ","\n  "],["\n  ","The GL transaction has been reversed.","\n  ","\n  ","\n  "],["\n  "],["\n  ","Use this procedure to populate the DynAd Template to upload mass transactions into various modules of Integra.","\n  "],["\n  ","\n    ","Retrieve the most up-to-date version of the DynAd Template from Box.","\n    ","Carefully read all the following instructions embedded in the DynAd Template itself.","\n  ","\n  ","\n    ","Field-specific instructions in the header section of the template","\n    ","Column-specific instructions for each journal entry line","\n  ","\n  ","\n    ","Populate the Dynad Template with journal entries.","\n  ","\n  "," ","\n  "],["\n  "],["\n  "],["\n  ","Use this procedure to upload the DynAd template to Integra. The upload function creates a journal in Integra.","\n  "],["\n  ","\n    ","The DynAd template has been populated and saved to a local/shared drive.","\n    ","User knows how to add/move columns in a table grid. For guidance, refer to the procedure, ","Personalize Table Grid Layouts",". ","\n  ","\n  "],["\n  ","\n    ","Navigate modules to ","General ledger > Workspaces > DynAd Journal Import",".","\n  ","\n  ","\n  "],["\n  ","\n    ","Select the tile on the left labeled, ","Import journal transactions",".","\n  ","\n  ","\n  ","\n    ","Action the following fields/buttons:","\n  ","\n  ","\n    ","\n      ","\n        ","\n        ","\n      ","\n      ","\n        ","\n          ","\n            ","Field/Button","\n          ","\n          ","\n            ","Entry Required","\n          ","\n        ","\n        ","\n          ","\n            ","Processing group","\n          ","\n          ","\n            ","Select"," DynAD Upload"," from the drop-down selection list.","\n          ","\n        ","\n        ","\n          ","\n            ","Run in batch mode","\n          ","\n          ","\n            ","Click button so it displays ",".  ","\n          ","\n        ","\n        ","\n          ","\n            ","Enable multi-threading for batch","\n          ","\n          ","\n            ","Click button so it displays ","\n          ","\n        ","\n        ","\n          ","\n            ","Browse","\n          ","\n          ","\n            ","Click ","Browse ","to select the upload file.","\n          ","\n        ","\n        ","\n          ","\n            ","Upload","\n          ","\n          ","\n            ","Once file has been selected and is displayed, click ","Upload",".","\n          ","\n        ","\n        ","\n          ","\n            ","OK","\n          ","\n          ","\n            ","Click "," to proceed and view the import results.","\n          ","\n        ","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","\n    ","Validate the message, “Batch import scheduled….” is displayed.","\n  ","\n  ","\n  ","\n    ","Wait for the system to process the journal. An Infolog will appear in the top-right corner displays once the DynAd Journal import is completed.","\n    ","Close all messages.","\n  ","\n  ","\n  ","\n    ","On the menu options to the left of the results grid, select ","Import results",".","\n  ","\n  ","\n  ","\n    ","Locate the relevant upload file and view the upload status under the ","Execution summary stats"," column.","\n  ","\n  "],["\n  ","\n    ","Determine next step:\n      ","\n        ","If status is ","Successful",", return to the ","All ","menu and proceed with performing posting simulations and/or posting as per note described under step 1 above.","\n        ","If status displayed is ","Failed ","or ","Partially succeeded",", proceed to step below to investigate issues.","\n      ","\n    ","\n    ","Select the import line and on the menu above the grid, click ","Execution Details",".","\n  ","\n  ","\n  ","\n    ","Review the status symbol displayed on page\n      ","\n        ","Green checkmark = upload was successful.","\n        ","Red circle with red cross = upload failed","\n        ","Triangle with an exclamation mark = upload partially succeeded","\n      ","\n    ","\n    ","Review the information under the ","Entity processing status"," section:","\n  ","\n  ","\n    ","The ","Pending ","column displays the number of records in the upload that require modification.","\n    ","The ","In staging"," column displays the number of records uploaded successfully.","\n  ","\n  ","\n  ","\n    ","Click ","View Staging Data"," to view details about errors in the journal lines.","\n  ","\n  ","\n  ","\n    ","On the menu at the top of page, click ","Validate all ","to see detailed error messages.","\n    ","Add the column ","Error message"," to the table and move it to a suitable/visible location in the grid.","\n    ","Review the grid to determine the completed lines and the lines with errors.","\n    ","Click ","Edit ","to enable editing/correcting of the lines in the grid. Correct all the lines that have  ","Staging to target ","status of ","Error ","until all the lines have been corrected.","\n  ","\n  "],["\n  ","\n  ","\n    ","Click ","Save",".","\n    ","Click ","Validate all ","to validate the lines following the modifications.","\n    ","Click ","Copy data to target"," to copy the corrected data to the associated journal.","\n  ","\n  ","\n  ","\n    ","On the"," Select a job ID to run"," form, select ","Criteria ","in the ","Run for"," field.","\n  ","\n  "],["\n  ","\n    ","Click ","OK",".","\n    ","Review the data on the ","Target data execution"," grid.","\n  ","\n  ","\n  ","\n    ","Click ","X"," to close and return to the Execution summary view.","\n  ","\n  "],["\n  ","You have uploaded the DynAd template to Integra.","\n  "],["\n  "],["\n  ","For re-classification of entries from one project to another, IRC typically uses project adjustments, specifically for any re-classification entry that is recoding an ITEM expense from one project to another. This project adjustment has been customized to include reason codes and the user can trace these adjustments back to the original project transaction. The DynAd Journal does not have this ability.","\n  ","For re-classification of amounts from one balance sheet account to another, and for intercompany booking and re-coding, the DynAd Journal is used.","\n  ","When re-coding project EXPENSE and FEE charges, the DynAd Journal can also be used.","\n  ","If you are re-classifying a foreign currency transaction within the same accounting period, then you do not need to 'force' the exchange rate.","\n  "],["\n  ","During the interim period, the process for re-classification of prior month entries will adhere to the following:","\n  ","\n    ","All prior period date entries, whether they are re-classification or intercompany clearing transactions, are posted with the current month system date in Integra.  ","\n    ","The ","Document date"," field is used to track original date of the transactions.  For entries originating from a prior period but that were either posted originally or re-classified using the current period system date, the document date field must be populated to include the original transaction date.","\n    ","The SAF file from the country office shall be uploaded to ISUN with the transaction date and document date.","\n    ","If the transaction date of the SAF file entry is within the current month, the system transaction date and the document date will be the same date.","\n    ","If the transaction date in the SAF file has a prior period date, then the entries will be posted using the current period system date and the document date field will hold the original date of the transaction.","\n  ","\n  "],["\n  "],["\n  ","Use this procedure to view the different journal types in Integra.","\n  "],["\n  ","The user must understand the usage of the different types of journals in Integra in order to post the transaction choosing the appropriate journal options and populating all required journal fields in Integra.","\n  "],["\n  ","\n    ","Navigate modules to ","General ledger > Journal setup > Journal names",".","\n  ","\n  ","\n  ","\n    ","Review the list of journal names in the tab on the left.","\n  ","\n  "],["\n  ","You have viewed a comprehensive list of all journal names in Integra.","\n  "],["\n  ","The data connector tool provides an alternative method for journal entry only when there are no project transactions. Use the most recent version of the DynAd Journal Template (download the most recent version from IRC Master folder in Box).","\n  "],["\n  "],["\n  ","\n    ","Ensure the data is ready in Excel before proceeding.","\n    ","Navigate modules to ","General ledger > Journal entries > General journals",".","\n    ","Click ","New ","after selecting the appropriate journal Name ‘","JE","’ for example.","\n    ","Click on the Microsoft icon (top right corner) and select ","General journal line entry",".","\n  ","\n  ","\n  ","\n    ","In the window that opens, click ","Download",".","\n    ","Open the downloaded file in Excel.","\n    ","Wait for it to run until a pop-up message appears.","\n  ","\n  ","\n  ","\n    ","Click ","Yes ","when prompted to confirm refresh.","\n      Additional processing will occur, and your journal will be ready to be populated.","\n    ","In column ","AG",", hover on the blue line, drag it down to the expected number of lines in the journal. The two snapshots will show how column AG has changed.","\n  ","\n  ","\n  ","\n  ","\n    ","Complete the ","Financial Dimensions"," based on the IRC Account structure.","\n    ","After populating the file, click ","Publish",".","\n  ","\n  ","\n  ","The file will run and will show refreshed data at the bottom of the screen.","\n  ","\n    ","Go back to Integra, under ","General Ledger > Journal Entries > General Journals"," and click ","Show user-created only"," to locate the journal.","\n    ","Follow the same steps for attaching documents and submitting to workflow as explained for DynAd journal and Direct journal entries in Integra.","\n  ","\n  "],["\n  ","The file should be successfully imported, and the journal can be reviewed, validated, and posted.","\n\n","\n  ","\n    ","                                                                                                      rescuenet.rescue.org/i/integra-support","\n  ","\n\n"]],"2":[["Business Process Overview"]],"3":[["Process Flow Diagram"],["Journal Types in Integra"],["The DynAd Template"],["Processing Foreign Currency Journal Entries"],["Create a Journal Entry in Integra"],["Create a Periodic Journal"],["Create a Journal Entry from a Periodic Journal"],["Adjust Accounting on Posted Project Transaction (Easy Method)"],["Recode a Journal Entry"],["Reverse a General Ledger Entry (After Trial Balance)"],["Populate the DynAd Template"],["Upload Completed DynAd Template to Integra"],["Appendix"],["Re-classification of Base and Foreign Currency Transaction"],["Re-classification of Prior Period Entries (Interim Period)"],["Viewing Journal Types in Integra"],["Use the Data Connector in Excel to Edit/Upload Journal Lines"]],"4":[["Purpose"],["Prerequisites"],["Steps"],["Result"],["Purpose"],["Prerequisites"],["Steps"],["Result"],["Result"],["Steps"],["Result"],["Steps"],["Result"],["Steps"],["Result"],["Purpose"],["Steps"],["Purpose"],["Prerequisites"],["Steps"],["Result"],["Purpose"],["Prerequisites"],["Steps"],["Result"],["Steps"],["Result"]],"5":[["Note",": There is only one account used for subsidiaries. All subsidiaries with charges must be listed as 786500.0.e for the D2 Project category."],["Note",": For periodic journals that have more than ten lines, use the DynAd Template to upload journal lines. Refer to the instructions outlined in the DynAd Template article of this section."],["Notes",":","\n      Billable is only for projects with fee (ICR) and that require revenue recognition such as grants and contracts or restricted.","\n       ","\n      NonBill is used for those projects that do not require revenue recognition such as unrestricted and temporary restricted projects."],["IMPORTANT",": Only general ledger transactions can be reversed. Any transaction that was posted from a sub-ledger cannot be reversed in the General Ledger."],["Important",": Do not change any information in any of the column headers of the DynAd Template. If any changes are made the upload to Integra will fail."],["Note",": For files that have been successfully uploaded (with no errors) the options to ","Simulate posting"," and ","Simulate posting in batch ","are available under the ","Validate ","menu of the ","History and import"," results grid. There is also the ability to ","Post ","journal import files from this grid. Alternatively, the journal may be posted via navigation path, ","General ledger > Journal entries > General journals","."],["Tips",":","\n      - Filter with your name under the ","User ID"," field to only display files you have uploaded.","\n      - To delete an upload file, select the line and click Delete."],["Note",": Any errors in the data can corrected in the original DynAd MS Excel Template and then re-uploaded the error-free data to Integra. Use the Export to Excel function accessed via the toolbar in the top-right corner of page."],["Important",": The interim solution is to select ","All ","in the ","Run for"," field as there is a technical issue with selecting Criteria whereby all the lines do not get populated in the journal. (as of Dec. 16, 2020)"],["Note",": This is only used to upload journals that ","DO NOT"," have project transactions. This process mainly refers to balance sheet accounts or expense/revenue accounts that do not touch the Projects module."]],"id":"17"})