rh._.exports({"0":[["Month-End Close (RAI US)"]],"1":[["\n  ","\n    "," ","\n  ","\n  ","\n  ","\n    "],["\n    "],["\n    ","\n      ","The Dynad Journal is used for populating and uploading mass journal entries to Integra.\n        ","\n          ","Examples of mass upload journals include payroll allocation, subaward/expenses, re-classification of entries, and shared program cost allocation entries.","\n          ","Selecting the correct journal name in the Dynad Journal is vital to ensure data is processed correctly in Integra.\n            ","\n              ","Behind each journal name there is systematic coding, i.e., posting profiles, that updates the Integra system in the correct way.","\n              ","Refer to the appendix at the end of this guide for a comprehensive list of journal names and usage.","\n            ","\n          ","\n          ","The recommendation is that if you have less than ten (10) lines, it may be easier to create the journal entries directly in Integra.","\n        ","\n      ","\n      ","For most business tasks, transactions are posted to sub-ledgers (vs. the General Ledger).\n        ","\n          ","However, there are select transactions that get posted directly to the General Ledger.","\n        ","\n      ","\n      ","Period statuses are used to control access for postings to ledger and sub-ledgers.\n        ","\n          ","For example, vendor (AP) and customer (AR) sub-ledgers should have all invoice/payment journals posted by the sixth working day of month-end closing. To prevent users from posting to AR/AP sub-ledgers after the sixth working day, the sub-ledgers can be “closed” for posting by changing the module status to On hold.","\n        ","\n      ","\n    ","\n    "],["\n    ","\n      ","Close/open fiscal posting periods\n        ","\n          ","This process is done at specified times in the month by designated Finance individuals.","\n        ","\n      ","\n      ","Ensure all ‘daily’ transactions have been posted in correct fiscal period.","\n      ","Post intercompany transactions.","\n      ","Post month-end journals.\n        ","\n          ","This process refers to journal entries that are processed at month-end only","\n        ","\n      ","\n      ","Calculate ICR and Prepare Fee Journal","\n      ","Perform Reconciliation and Analysis\n        ","\n          ","This process includes the use of the following standard delivered Integra transactions/functionality to identify and remedy discrepancies\n            ","\n              ","Trial Balance","\n              ","Voucher Transactions","\n              ","Accounting Source Explorer","\n              ","Tracing Original Entries","\n            ","\n          ","\n        ","\n      ","\n      ","Generate Reports\n        ","\n          ","Numerous reports are available for analysis in Integra and Power BI.","\n        ","\n      ","\n    ","\n    "],["\n    ","Refer to the checklist in the appendix of this document. This checklist can also be found on RescueNet.","\n    "],["\n    ","For many month-end business tasks, the step-by-step procedures are documented in a separate user guide as they are standard transactions used for day-to-day business tasks. In these instances, a reference to the applicable guide is included in this document.","\n    ","This guide includes detailed procedures for tasks that are not contained within another user guide.","\n    "],["\n    "],["\n    "],["\n    ","Use this procedure to open or close a fiscal calendar period.","\n    ","Once you close the current period, the new period should immediately be opened to ensure users can transact from the first day of the next period.","\n    ","A custom “Period close” security group (PrdCls) has been defined to allow designated Finance users the ability to process periodic transactions after the period has been closed to the general user population.","\n    ","The following period “statuses” are used to open and close fiscal calendar periods.","\n    ","\n      ","Open",": Open to all eligible users for transaction posting. ","\n      ","On hold",": Transactions cannot be posted in the period. However, select users in Finance can post transactions for month-end reconciliation purposes.","\n      ","Permanently closed",": This status is currently not being used; once you permanently close a period, it can never be reopened again.","\n    ","\n    "],["\n    ","\n      ","From the Integra dashboard, go to General ledger > Calendars > Ledger calendars.  ","\n      ","In the left-hand panel of screen, click on the period to change.","\n      ","Under the Legal entity column, select the legal entity to update. ","\n    ","\n    "],["\n    ","\n      ","In the top left of page, click \"Edit\".","\n      ","Select Update Period status. ","\n      ","Click Edit at the top right-hand side to allow you to change the period status. ","\n      ","In the Period status field drop down, select On hold/Open for the period that is being closed or opened.   ","\n      ","Under the Ledger column, select PrdCls.","\n      ","The Ledger column refers to the General Ledger","\n      ","PrdCls is a custom security group created for specific Finance individuals so they can post transaction after the Period status has been updated to On hold.","\n      ","If opening or closing a sub-ledger, click Update module access.","\n      ","For module access update, go to the module that you want to update. ","\n      ","Select from the drop down, whether you want to restrict a module or user group. If you select “None”, it means that no posting can happen to that sub ledger.  Also, if you select any access level, it overrides the period status.  ","\n      ","All necessary adjusting entries and re-classifications will be done at this point. ","\n    ","\n    ","‎ ","\n    "," ","\n    ","\n      ","Click Save. ","\n    ","\n    "],["\n    ","You have opened or closed a fiscal posting period.","\n    "," ","\n    "],["\n    "],["\n    "],["\n    ","Use this procedure to post intercompany transactions.","\n    "],["\n    ","\n      ","Refer to the following user guide and specific step-by-step procedures on how to post journals.","\n    ","\n    "],["\n    ","The appendix of this user guide includes specific accounting entry requirements required based on the type of intercompany transaction being processed.","\n    "],["\n    "],["\n    "],["\n    ","Use this procedure to post monthly charges, such as prepaid rent, prepaid insurance, etc.","\n    ","There are different journal names for the various periodic charges. Refer to the Journal Name table in the Dynad Journal template for the correct selection.","\n    "],["\n    "],["\n    ","\n      ","Refer to the following user guide and specific step-by-step procedures on how to post journals.","\n    ","\n    "],["\n    ","Procedure: Using the Dynad Template to Upload Journal Entries","\n    ","Procedure: Posting Periodic Journals (directly in Integra)","\n    "],["\n    "],["\n    ","Use this procedure to allocate asset depreciation charges across projects.","\n    "],["\n    ","Refer to the following user guide for step-by-step procedures on how to post journals.","\n    ","\n      ","Journal Entry and Upload\n        ","\n          ","Procedure: Using the Dynad Journal Template to Upload Journal Entries","\n          ","Procedure: Posting Periodic Journals","\n        ","\n      ","\n    ","\n    "],["\n    "],["\n    ","Use this procedure to allocate payroll charges across projects.","\n    "],["\n    ","Refer to the following user guide for step-by-step procedures on how to post journals.","\n    ","\n      ","Journal Entry and Upload\n        ","\n          ","Procedure: Using the Dynad Template to Upload Journal Entries","\n        ","\n      ","\n    ","\n    "],["\n    "],["\n    ","Use this procedure to allocate shared program costs across projects.","\n    "],["\n    ","Refer to the following user guide for step-by-step procedures on how to post journals.","\n    ","\n      ","Journal Entry and Upload\n        ","\n          ","Procedure: Using the Dynad Template to Upload Journal Entries","\n        ","\n      ","\n    ","\n    "],["\n    "],["\n    "],["\n    ","Use this procedure to reverse wrong entries in the GL and later record them to the correct entries. ","\n    "],["\n    "],["\n    ","\n      ","After running the trial balance (see above), double-click the transaction in the Closing balance column that needs to be reversed. ","\n      ","Click Reverse transaction.","\n    ","\n    ","\n    ","\n      ","On the Transaction reversal screen, enter the Reversal posting date. ","\n      ","Click OK. ","\n    ","\n    "," ","\n    ","\n      "," Click Reversed tracing. The original and reversed transactions are displayed.  ","\n      ","Close the transaction by selecting "," at the top right of the screen when the review is completed. ","\n    ","\n    "],["\n    ","The transaction is reversed and reviewed. ","\n    ","\n    "],["\n    "],["\n    ","Use this procedure to recode a transaction from one project to another.","\n    ","Adjusting project transactions in the project sub ledger automatically adjusts the corresponding general ledger posting.","\n    ","There are two methods to adjust project transactions in Integra.","\n    ","\n      ","Adjust transactions per project.","\n      ","Adjust transactions by batch.","\n    ","\n    "],["\n    "],["\n    ","Refer to the following user guide for step-by-step procedures on how to post journals.","\n    ","\n      ","Journal Entry and Upload\n        ","\n          ","Procedure: Using the Dynad Template to Upload Journal Entries","\n          ","Procedure: Recoding Journal Entries","\n        ","\n      ","\n    ","\n    "],["\n    "],["\n    ","Use this procedure to allocate inventory adjustment values to update the relevant general ledger accounts.","\n    ","For example, an inventory adjustment that Supply Chain previously made for damaged inventory now needs to be allocated to an insurance GL account.","\n    "],["\n    ","\n      ","Refer to the following user guide for step-by-step procedures on how to post journals.","\n      ","Journal Entry and Upload","\n      ","Procedure: Using the Dynad Template to Upload Journal Entries","\n    ","\n    "],["\n    "],["\n    "],["\n    ","Use this procedure to display unposted journals to review and action as required. E.g., post applicable journals.","\n    "],["\n    ","\n      ","From the Integra dashboard, go to General ledger > Journal entries > General journals.","\n    ","\n    ","\n    ","\n      ","Under the Show heading, the default entry is Not posted. These are the entries to look at to determine what should have been posted in the month being closed.","\n      ","This entry can be changed to Posted or All by clicking the drop-down arrow.","\n      ","To determine the date a journal was entered, customize the table grid by adding the column Created date and time.","\n      ","Right click on any column header and select Add columns.","\n      ","In the filter box, enter text “Created”.","\n      ","Select Created date and time from the selection list and Insert it into the table. The column will be added at the end of the current columns.","\n      ","Review the list of unposted journals in the current period and action as required, e.g., post applicable journals.","\n    ","\n    "],["\n    ","You have identified unposted journals for the month-end close period.","\n    "],["\n    ","Revenue Recognition is run by HQ. RAI offices are responsible for calculating ICR (Indirect Cost Recovery), preparing the fee journal and submitting the journal to HQ for uploading and posting.","\n    ","ICR is calculated and prepared in a Fee Template outside of Integra. This template can be downloaded from the following location.","\n    ","There are two methods available for uploading ICR entries:","\n    ","\n      ","Performing a mass upload of entries using the Data Connector Tool (recommended to use when there are more than 10 entries.","\n      ","Typing ICR entries directly into Integra (option to use when there are less than 10 entries)","\n    ","\n    "],["\n    "],["\n    ","Use this procedure to use the Data Connector tool to upload mass ICR entries to Integra.","\n    ","This is only performed by HQ Finance.","\n    "],["\n    ","The ICR Fee Template has been completed.","\n    "],["\n    ","\n      ","Navigate modules to Project management and accounting ",">"," Journals ",">"," Fee. ","\n    ","\n    ","\n    ","\n      ","On the menu at the top, click Open in Excel and click OK.","\n      ","Click on the Excel file to open.  ","\n    ","\n    "],["\n    ","\n    ","\n      ","Activate the number of rows required to copy the data from the ICR Fee Template.  ","\n    ","\n    ","\n    ","\n      ","Go to the right-hand side at the edge, hold and pull down using your mouse left click. Release your mouse left click. You should see all rows activated. This means that you can access some of the data directly from Integra by clicking in an activated cell. ","\n      ","In the active cells, use copy and paste ‘special value’ in each corresponding column. ","\n      ","Click Publish.  ","\n    ","\n    ","‎","\n    ","Navigate modules to Project management and accounting ",">","\n    ","\n      ","Journals ",">"," Fee. ","\n    ","\n    ","\n      ‎","\n    ","\n      ","Select your journal and click Lines at the top to display lines details. ","\n      ","On the menu at the top, click Validate to check for errors. ","\n      ","On the Check journal pop-up window, click OK to proceed. ","\n    ","\n    ","\n    ","\n      ","If there are no errors, a message in a blue ribbon appears near the top of the page. ","\n      ","On the menu at the top of the page, click Post.  ","\n    ","\n    "],["\n    ","The fee journal does not use workflow; it is based on the security access given to an individual in the system. ","\n    "],["\n    "],["\n    ","Use this procedure to enter individual fee journals into Integra.","\n    ","This is only performed by HQ Finance.","\n    "],["\n    ","The ICR Fee Template has been completed.","\n    "],["\n    ","\n      ","Navigate modules to Project management and accounting ",">"," Journals ",">"," Fee. ","\n    ","\n    ","\n    ","\n      ","On the menu at the top of page, click \"New\".","\n    ","\n    ","‎","\n      ‎","\n    ","\n      ","Select the newly added line and click \"Lines\" on the menu at the top of the page.","\n    ","\n    ","\n    ","\n      ","On the menu at the top of page, click \"New\" to add journal lines.","\n    ","\n    ","\n    ","\n      ","Complete the following fields for the vendor invoice line:","\n    ","\n    ","\n      ","\n        ","\n          ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","Field","\n            ","\n            ","\n              ","Entry Required","\n            ","\n          ","\n          ","\n            ","\n              ","Project date","\n            ","\n            ","\n              ","Select the posting date.","\n            ","\n          ","\n          ","\n            ","\n              ","Project ID","\n            ","\n            ","\n              ","Enter the project D1 code.","\n            ","\n          ","\n          ","\n            ","\n              ","Category","\n            ","\n            ","\n              ","Enter the D2 (project category) that correspond to the D1 code.","\n            ","\n          ","\n          ","\n            ","\n              ","Resource","\n            ","\n            ","\n              ","Leave this field blank.","\n            ","\n          ","\n          ","\n            ","\n              ","Description","\n            ","\n            ","\n              ","Enter a description.","\n            ","\n          ","\n          ","\n            ","\n              ","Sales currency","\n            ","\n            ","\n              ","Do not change this field.","\n              ","This value automatically defaults to the project contract currency when you select your project ID.","\n            ","\n          ","\n          ","\n            ","\n              ","Sales price","\n            ","\n            ","\n              ","Enter the fee amount.","\n            ","\n          ","\n          ","\n            ","\n              ","Line property","\n            ","\n            ","\n              ","This value defaults to Billable.","\n            ","\n          ","\n          ","\n            ","\n              ","Purpose","\n            ","\n            ","\n              ","Leave this field blank.","\n            ","\n          ","\n        ","\n      ","\n    ","\n    "," ","\n    ","\n    ","\n      ","On the menu at the top of page, click Financial dimensions. ","\n    ","\n    ","\n    ","\n      ","Complete the required financial dimensions and click OK.","\n    ","\n    "],["\n    ","\n    ","\n      ","On the menu at the top, click Validate to check for errors. ","\n    ","\n    ","\n    ","\n      ","On the Check journal pop-up window, click OK to proceed. ","\n    ","\n    ","\n    "],["\n    ","\n      ","On the menu at the top of the page, click Post.  ","\n    ","\n    "],["\n    "],["\n    "],["\n    ","Reconciliation is composed of three key steps.","\n    ","\n      ","Running the reconciliation reports to identify discrepancies.","\n      ","Using Integra’s analysis tools to find out the cause of the discrepancy.","\n      ","Process journal entries to fix discrepancies.","\n    ","\n    ","This topic identifies the reconciliation reports available in Integra, PowerBI or Excel.","\n    "],["\n    "],["\n    ","Use this procedure to run the various reconciliation reports to identify discrepancies.","\n    ","A common reason differences occur is because a transaction was posted to the General Ledger instead of the sub-ledger. Complete the To-From date fields and make sure you select the accounting currency in the Currency field. Run the report and look at the difference column. It should always be zero. If it is not zero, investigate and post the necessary adjustment entries. ","\n    ","Outlined below is a list of the reconciliation reports available in Integra, PowerBI, or Excel and their corresponding module navigation paths.","\n    ","\n      ","\n        ","\n          ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","Reconciliation Report","\n            ","\n            ","\n              ","Menu Path","\n            ","\n          ","\n          ","\n            ","\n              ","Customer to Ledger","\n            ","\n            ","\n              ","Accounts receivable ",">"," Inquiries and reports ",">"," Customers ",">"," Customer to ledger reconciliation report","\n            ","\n          ","\n          ","\n            ","\n              ","Vendor to Ledger","\n            ","\n            ","\n              ","Accounts payable ",">"," Inquiries and reports ",">"," Vendor reports ",">"," Vendor to ledger reconciliation","\n            ","\n          ","\n          ","\n            ","\n              ","Project to Ledger","\n            ","\n            ","\n              ","General ledger ",">"," Inquiries and reports ",">"," Consolidation reports ",">"," GL-to-Project Reconciliation","\n            ","\n          ","\n          ","\n            ","\n              ","Bank to Ledger","\n            ","\n            ","\n              ","Treasury Automation Suite ",">"," Inquiries ",">"," Bank ",">"," Bank/GL statement reconciliation","\n            ","\n          ","\n          ","\n            ","\n              ","Automated/Manual Bank","\n            ","\n            ","\n              ","Accounts receivable ",">"," Inquiries and reports ",">"," Customers ",">"," Customer to ledger reconciliation report","\n            ","\n          ","\n          ","\n            ","\n              ","Balance Sheet Reconciliation (for balance sheet accounts that don’t belong to a sub-ledger)","\n            ","\n            ","\n              "," ","\n              ","Refer to list of main accounts in Month-end Close Checklist","\n            ","\n          ","\n          ","\n            ","\n              ","Benefit % Allocations for Personnel – Salary Expenses","\n            ","\n            ","\n              ","This report is available in PowerBI.","\n            ","\n          ","\n        ","\n      ","\n    ","\n    "," ","\n    "],["\n    ","The following key inquiries are used repeatedly and iteratively in Integra for analyzing data and resolving discrepancies for month-end close purposes. Data can be exported from these inquiries to Excel for easier investigation.","\n    ","\n      ","Trial Balance","\n      ","Voucher Transactions","\n      ","Accounting Source Explorer (ASE)","\n      ","Audit Trail","\n      ","Trace Original Entries","\n    ","\n    "],["\n    "],["\n    ","The Trial Balance is a list page that shows all the balances of an account and/or financial dimensions for a given period. When the trial balance is first opened it refreshes with the balances for the dates and properties that are set in the parameters. Properties that can be changed in the parameters include dates, posting layer, how opening balances appear, and what closing transaction types to show. ","\n    ","When you change the parameters, the balances are refreshed. You can also pick what dimension set you want to view balances for and whether each of the dimensions show in separate columns. You can also drill down on the balances to view the transactions that make up the balance. ","\n    "],["\n    ","\n      ","Go to General ledger > Inquiries and reports > Trial balance. ","\n    ","\n    ","  ","\n    ","\n      ","In the From date field, enter the beginning date for the monthly balance. ","\n      ","In the To date field, enter the ending date for the monthly balance a date. ","\n      ","Click Calculate balances. ","\n    ","\n    "," ","\n    ","\n      ","Once the trial balance is completed, you can double-click on the balances to view the transactions that make up the balance. ","\n      ","Close the transaction by selecting "," at the top right of the screen when the review is completed. ","\n    ","\n    "," ","\n    "," ","\n    "],["\n    ","The Trial Balance has been generated. ","\n    ","Export the trial balance to Microsoft Excel ","\n    ","On the Trial Balance screen, click the Open button > EXPORT TO EXCEL >Trial Balance. ","\n    ","  ","\n    ","Click Open to open the Excel file on your computer or click Save to save it on your computer. ","\n    "," ","\n    ","The Trial Balance can be analysed in Excel. It lists the name of each nominal ledger account and the value of that nominal ledger balance, with either a debit balance or a credit balance, as well as a closing balance:  ","\n    "," ","\n    "],["\n    "],["\n    ","To get details of transactions posted in the system, we use voucher transactions in General ledger. This pulls out all the transactions and one can limit it by date, journal, voucher number and main account. Voucher transactions can be pulled out irrespective of the date range.  ","\n    "],["\n    ","\n      ","Log into Integra and click the Navigation Pane. ","\n      ","Go to General ledger > Inquiries and reports > voucher transactions. ","\n    ","\n    "," ","\n    ","\n      ","Leave everything blank if you want to pull out all the transactions. Otherwise complete a specific detail in the criteria column that you know about the transaction to download. ","\n    ","\n    "," ","\n    ","\n      ","Review results.","\n    ","\n    ","\n    "],["\n    "],["\n    ","Another method used to get transaction details form the system is using the accounting source explorer. Like the trial balance, this brings out transactions but only limited to a calendar year.   ","\n    "],["\n    ","\n      ","Log into Integra and click the Navigation Pane. ","\n      ","Go to General ledger > Inquiries and reports > Accounting source explorer. ","\n      ","On the Update menu, select the date range. ","\n      ","Click Update. ","\n    ","\n    "," ","\n    ","The transactions are automatically displayed based on the default setting in the Financial dimensions field.  ","\n    ","\n      ","Click the Financial Dimensions field to select any relevant dimension combination.","\n    ","\n    "," ","\n    ","You can export to excel as previously discussed in the trial balance example. ","\n    "],["\n    "],["\n    ","Use this procedure to view the view the person that posted a specific transaction.","\n    ","Integra has the ability at every given time to know you posted the transaction in the system. There two ways of knowing who posted the transaction:  ","\n    ","\n      ","The Audit trail report in General Ledger ","\n      ","Transaction method ","\n    ","\n    "],["\n    "],["\n    ","\n      ","Go to General ledger > Inquiries and reports > Audit trail ","\n      ","A list of records will open. The column ‘created by’ shows who posted the transaction. ","\n    ","\n    ","‎","\n    "," ","\n    ","\n      ","If you want to see the details of the transactions, select only one transaction. ","\n      ","Click on Voucher transactions. ","\n    ","\n    "," ","\n    ","\n      ","Review results.","\n    ","\n    "," ","\n    "],["\n    "],["\n    ","In Integra, you can trace the origin of a transaction back to the original documentation and related vouchers.","\n    ","Original journal entries can be viewed via the following transactions:","\n    ","\n      ","Voucher transactions ","\n      ","Accounting Source Explorer","\n      ","Trial Balance","\n    ","\n    ","\n      ‎The related vouchers feature is used to trace intercompany transactions. This enables you to see which legal entity an entry originated from.","\n    "],["\n    ","\n      ","Log into Integra and navigate to Voucher transactions in General Ledger. ","\n      ","In the screen that opens, select the transaction you want to trace its origin. ","\n      ","Look at the tool bar to locate the tracing features. ","\n    ","\n    "," ","\n    ","\n      ","Click on original document in the features shown above.  ","\n      ","In the window that opens, click on view details.  ","\n    ","\n    "," ","\n    ","\n      ","In the window that opens, you will see a one-line journal voucher. ","\n      ","Click Voucher to see the full entry journal entry ","\n    ","\n    "," ","\n    ","\n      ","View the original entry. ","\n    ","\n    "," ","\n    ","To know if the transaction came from another legal entity, the Related vouchers feature must be active.  ","\n    ","After selecting a transaction, look at the tool bar to see if the Related vouchers feature is active. If so, click it and a table will open. ","\n    ","  ","\n    ","In the table that opens, you will see all the legal entities listed. If you wish to see the journal voucher, click on voucher. ","\n    ","  ","\n    "],["\n    "],["\n    ","The following reports should be run after month-end close is complete.","\n    ","\n      ","\n        ","\n          ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","Report","\n            ","\n            ","\n              ","Location","\n            ","\n          ","\n          ","\n            ","\n              ","Final Trial Balance","\n            ","\n            ","\n              ","In Integra, navigate to General ledger ",">"," Inquiries and reports ",">"," Trial balance.","\n            ","\n          ","\n          ","\n            ","\n              ","Revenue and Expense Report","\n            ","\n            ","\n              ","This report exists in PowerBI.","\n            ","\n          ","\n          ","\n            ","\n              ","Project BvA","\n            ","\n            ","\n              ","These reports exist in PowerBI.","\n            ","\n          ","\n          ","\n            ","\n              ","FM01 Equivalent Report","\n            ","\n            ","\n              ","This report exists in PowerBI.","\n            ","\n          ","\n        ","\n      ","\n    ","\n    "],["\n    "],["\n    ","Additional notes have been added to certain journal names for clarification.","\n    ","Insert table once finalized.","\n    ","\n    "],["\n    ","This checklist outlines key tasks and dates required to complete financial month-end close. For detailed guidance on performing system transactions, refer to the following training user guide on RescueNet:","\n    ","\n      ","Month-end Close (RAI)","\n      ","Monthly Due Dates","\n    ","\n    ","The following table lists the due dates for month-end close tasks. Further details on each of these is outlined after the table.","\n    ","\n      ","\n        ","\n          ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","Due Date","\n            ","\n            ","\n              ","Task","\n            ","\n          ","\n          ","\n            ","\n              ","Last day of every month","\n            ","\n            ","\n              ","Sub-ledger postings","\n            ","\n          ","\n          ","\n            ","\n              ","The 8th of every month","\n            ","\n            ","\n              ","Intercompany close tasks","\n            ","\n          ","\n          ","\n            ","\n              ","The 12th of every month","\n            ","\n            ","\n              ","Monthly general journal postings","\n              ","Note: Some of these journals can be posted during the month.","\n            ","\n          ","\n        ","\n      ","\n    ","\n    "],["\n    ","\n      ","Expense Management - process and post all approved travel advances and expense reports (including credit card liquidations and TER)","\n      ","Accounts Payable - Process all vendor invoices and payments.","\n      ","Accounts Receivable - Book all cash receipts and deposits.","\n      ","Cash and Bank Management – Post direct charges, journalize unposted bank transactions as per prior month complete bank reconciliation.","\n      ","Fixed Assets – Generate depreciation proposal","\n      ","Inventory Management – All pick, pack and post transactions (except for \"in-kind\" Contribution)","\n    ","\n    "],["\n    ","\n      ","Post intercompany entries to A/c 29400 by the 8th of each month for RAI offices still using SUN","\n      ","Post intercompany entries to HQ – 9IRC","\n      ","Move intercompany entries in current period from General Ledger to relevant projects","\n      ","Prepare and Post Monthly General JournalsPost prepaid rent, prepaid insurance, deferred charges, etc.","\n      ","Post accruals (if required)","\n      ","Post depreciation allocation.","\n      ","Post In-kind contribution","\n      ","Post inventory adjustments (if required)","\n      ","Post any required project adjustment entries","\n    ","\n    "],["\n    ","\n      ","Post payroll allocation entries","\n      ","Post shared program cost allocation entries","\n    ","\n    "],["\n    ","\n      ","All standard journals are posted","\n      ","All unnecessary journals are deleted","\n      ","All unposted journals with a current period date are investigated, amended and/or posted.","\n    ","\n    "],["\n    ","\n      ","Once all of the previous tasks above are completed, calculate ICR entries, and populate the journal","\n      ","Submit journal to HQ Finance for uploading","\n    ","\n    "],["\n    ","\n      ","Run Customer to Ledger reconciliation report.","\n      ","Run Vendor to Ledger reconciliation report.","\n      ","Run Project to Ledger reconciliation report.","\n      ","Run Bank to Ledger reconciliation report.","\n      ","Post all adjustment entries to ensure balances in both sub ledger and ledger are equal","\n    ","\n    "],["\n    ","\n      ","Run automated or manual bank reconciliation to reconcile Bank accounts.","\n      ","Perform balance sheet reconciliation and post all adjustment entries to reconcile.","\n      ","Calculate and reconcile Benefit % allocations for Personnel – Salary expenses","\n    ","\n    "],["\n    ","\n      ","Generate final Trial Balance","\n      ","Generate Revenue and Expense Report","\n      ","Generate all Project BvA Reports","\n      ","Generate period-end financial statements by using Financial reporter","\n      ","FM01 Report equivalent","\n    ","\n  ","\n\n","\n  ","\n    ","                                                                                                      rescuenet.rescue.org/i/integra-support","\n  ","\n\n"]],"2":[["Business Process Information"]],"3":[["Purpose"],["Steps"],["Result"],["Purpose"],["Steps"],["Purpose"],["Steps"],["Purpose"],["Steps"],["Purpose"],["Steps"],["Purpose"],["Steps"],["Purpose"],["Steps"],["Result "],["Purpose"],["Steps"],["Purpose"],["Steps"],["Purpose"],["Steps"],["Result"],["Purpose"],["Prerequisites"],["Steps"],["Purpose"],["Prerequisites"],["Steps"],["Steps – Method 2: Mass upload of the fee (ICR) journal using data connector "],["Purpose"],["Purpose"],["Steps "],["Result"],["Purpose"],["Steps "],["Purpose"],["Steps "],["Purpose"],["Steps "],["Purpose"],["Steps "]],"4":[["Note: After selecting the legal entity, access levels to specific modules can be defined."],["Note: You don’t necessarily need to wait until month end to enter/post periodic charges, i.e., if you know the monthly allocation, you can enter it prior to month end."],["Note: Only transactions originating in the GL can be reversed in the GL; any transactions posted to a sub-ledger must be reversed in that sub-ledger."],["Note: Only users with the correct security access can use the project adjustment form in Integra. This is because project adjustment does not have any workflow."],["Note: If it is your first time using the Data Connector, you will need to install the application in your browser. Also, you will need to login using your IRC login credentials."],["Note: When you post a fee journal, it does not post to the general ledger; it is a subledger posting. The fee journal will be posted to the General Ledger at the time of revenue recognition."],["Note: Some financial dimensions may default based on setting applied in the project form."],["Note: If there are no errors, a message in a blue ribbon appears near the top of the page. "],["Note: When you post a fee journal, it does not post to the general ledger; it is a subledger posting. It will be posted to the General Ledger at the time of revenue recognition. The fee journal does not use workflow; it is based on security access given to an individual in the system. "],["Note: You can also view the audit trial from within the Trial Balance transaction by clicking the Audit train menu at the top of the page."]],"5":[["Key Messages"],["Month-end Close Tasks (High level)"],["Opening and Closing of Ledger Posting Periods"],["Open or Close a Fiscal Year Period"],["Intercompany Transactions"],["Post Intercompany Transaction"],["Intercompany Accounting"],["Month-end General Journals"],["Post Periodic Journals"],["Journal Entry and Upload"],["Post Depreciation Allocation Entries"],["Post Payroll Allocation Entries"],["Post Shared Program Cost Allocation Entries"],["Month-end Adjustments"],["Reverse G/L Entry"],["Post Project Adjustment Entries"],["Post Inventory Adjustments"],["Checking for Unposted Journals"],["Check for Unposted Journals for Current Ledger Period"],["Revenue Recognition (HQ Finance Only)"],["Perform Mass Upload of ICR Journal Template via Data Connector Tool (HQ Finance Only)"],["Enter ICR Fee Journal Directly in Integra (HQ Finance Only)"],["Reconciliation Reports"],["Reconciliation Reports Reference Table"],["Inquiries and Reports for Discrepancy Analysis"],["Run Trial Balance Report"],["Display Voucher Transactions"],["Run Accounting Source Explorer"],["View Audit Trail Report in General Ledger"],["Trace Original Entries: Original Documents and Related Vouchers"],["Month-end Close Reporting"],["Month-end Close Reports Reference Table"],["Appendix"],["Integra Journal Names and Usage"],["Month-end Close Checklist (RAI US Offices)"]],"6":[["Month-end Close Checklist"],["Important Note About This Guide:"],["Complete Transaction Postings in Sub-ledger Modules"],["Perform Intercompany Accounting"],["Post Allocation journals"],["Verify/Check Completion of Tasks"],["Calculate ICR Entries, Post journal and Submit to HQ for Upload"],["Complete Sub Ledger to Ledger Reconciliations"],["Complete All Other Account Reconciliations"],["Generate Reports once Month-end Close is Complete"]],"id":"11"})