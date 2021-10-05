rh._.exports({"0":[["Item Forecasting to Purchase Order Creation (CRRD)"]],"1":[["\n  ","\n    "," ","\n  ","\n  ","\n  ","\n    "],["\n    ","\n      ","The item forecast is used by CRRD for all project-related procurement planning.","\n      ","Each project has their own item forecast.","\n      ","An item forecast line is required for every product (items and services) that IRC expects to procure and distribute during the life of a project.","\n      ","After the first upload of the Excel version of the item forecast to Integra, ongoing changes are made directly in Integra.","\n      ","The item forecast is a “living document”; Programs and Supply Chain collaboratively create and maintain this document.","\n    ","\n    "],["\n    ","Regardless of the approval stage of a proposal/project, the steps for populating the Item Forecast Template are the same; the difference lies in “when” you do it.","\n    ","\n      ","Proposal submitted to Donor and awaiting project approval (highly likely)","\n    ","\n    ","\n      ","Written notification or Letter of Intent received from donor","\n      ","Applies to follow-on projects that get renewed annually (where new D1 is assigned each year)\n        ","\n          ","Could potentially be a non-follow-up project where verbal notification has been supplied by Donor.","\n        ","\n      ","\n      ","A project ID/D1 is assigned but spending cannot start until financing approval has been received from Donor and/or IRC. (and project has been activated in Integra).","\n    ","\n    ","\n      ","Award has been approved by Donor","\n    ","\n    ","\n      ","May or may not have received award agreement","\n    ","\n    "],["\n    ","Outlined below are the key steps from item forecasting through to item requirement creation. The responsible roles for each step are indicated above the step number.","\n    ","\n    "],["\n    ","\n      ","Prior to creating a purchase order (PO), Supply Chain must validate that there is insufficient on-hand quantity","*"," (reserved to the project) to fulfill the item requirement quantity. ","*","\n      ","Supply Chain assigns a vendor to each sales order line and creates POs from the sales order lines. (The Integra system automatically generates a sales order line for each item requirement line.)","\n    ","\n    ","*"," If there is excess inventory of a required item on another project, those items may be unreserved from the project with excess inventory and transferred to the project that requires the items.","\n    ","\n      ","For instructions for transferring inventory from one project to another, refer to the Inventory Management section (CRRD).","\n    ","\n    "],["\n    ","The following items are procured using purchase requisitions, not the item forecast.","\n    ","\n      ","Capitalized fixed assets","\n      ","Items using unrestricted funds","\n      ","Shared program costs.","\n    ","\n    ","For instructions on how to process these type of purchases, refer to the following sections:","\n    ","\n      ","Procure to Confirm (PR-PO)","\n      ","Fixed Asset Management","\n    ","\n    "],["\n    "],["\n    ","Use this procedure to retrieve and populate the Item Forecast Template (Excel Format).","\n    "],["\n    ","\n      ","Project has been approved or is “highly likely” to be approved.","\n      ","Senior Management has given the “go ahead” to begin populating the template.","\n      ","A copy of the budget with correct financial dimensions is at hand","\n    ","\n    "],["\n    ","\n      ","Retrieve the most current Item Forecast template from Box.","\n      ","Populate all required columns in the sheet titled, ","Item Forecasts",".","\n    ","\n    ","Important things to remember when populating the template:","\n    ","\n      ","A user should always retrieve the most recent version of the item forecast template.","\n      ","If there are multiple required by dates for a given product, an item forecast line is created for each different “required by date”.","\n      ","If there are multiple combinations of financial dimension values for a given product, an item forecast line must be created for each different combination of financial dimension values.","\n      ","Use the drop-down selection lists to select data, where available.","\n      ","The ","ProductName"," field holds a maximum of 100 characters. If more than 100 characters are required, enter the full description in the ","Description ","column.","\n      ","You can modify the “Price” column to reflect your most recent estimated price for the product (Guidance on the estimated price can be provided by the SC team)","\n      ","Do not change the defaulting value in the ","SalesUnitOfMeasure"," field.","\n      ","If item number is not known, enter ","999999999"," as a budget placeholder.","*","\n      ","Select ","999999999"," in the ProductID field.","\n    ","\n    ","\n      ","Manually type a description in the ","Description"," field.","\n      ","Enter the unit of measure and price and other required information.","\n      ","Ask your Supply Chain colleagues to request the creation of the new product  ","\n      ","Item requirements cannot be created for item 999999999 so this field eventually needs to be updated with actual product ID (or multiple product IDs if necessary).","\n    ","\n    ","*  ","Alternatively, leave this line out of the Item Forecast template until such time as a product number is available OR program staff have more specific information for products they want to procure.","\n    ","\n      ","The required naming convention for successful upload is, ","Item Forecast"," ","[project ID]_[reporting entity]",". ","\n    ","\n    ","Examples are: "," “Item Forecast DF119_2SLE”, “Item Forecast DF129_2KEN”","\n    ","\n      ","Standardized naming conventions have been developed for products for ease of searching and consistent reporting.  ","\n      ","Creating and updating the item forecast template is typically an iterative process, meaning that it will evolve as more details about procurement needs are identified","\n    ","\n    "],["\n    ","The item forecast template is complete and ready to upload to Integra.","\n    "],["\n    "],["\n    ","Use this procedure to upload the completed item forecast to Integra.","\n    ","This procedure is performed by Supply Chain.","\n    "],["\n    ","\n      ","All required fields in the template have been completed correctly","\n      ","Template is saved on local drive","\n      ","Project exists in Integra","\n      ","Template file has been named correctly for successful upload, i.e., with reporting entity suffix.\n        ","\n          ","E.g., “Item Forecast DF119_2SLE” ; “Item Forecast DF129_2KEN”","\n        ","\n      ","\n    ","\n    "],["\n    ","\n      ","Open the target Box page.","\n      ","Copy/upload file to Box location as per standard Box uploading procedures.","\n      ","Copy/upload completed template to target Box folder.","\n    ","\n    ","\n      ","“ABC Item Forecast Import_2KEN","\n    ","\n    ","\n      ","Validate template was successfully uploaded to Integra.","\n      ","After a few minutes, validate that file has disappeared from the Box location. This indicates that the file was uploaded to Integra.","\n      ","An email similar to the one below will be sent to indicate success of upload. (And likewise if it failed.)","\n    ","\n    "],["\n    ","The item forecast has been uploaded to Integra to the Project management and accounting module.","\n    "],["\n    ","Supply Chain validates the uploaded item forecast lines against the donor restriction table.","\n    "," ","\n    "],["\n    "],["\n    ","Use this procedure to validate uploaded item forecast lines against the donor restricted items table.","\n    "],["\n    ","\n      ","The item forecast template has been uploaded to Integra or a new line has been manually added.","\n    ","\n    "],["\n    ","\n      ","Navigate modules to ","Project management and accounting > All projects",".","\n    ","\n    ","\n    ","\n      ","Search for, and open, the target project form.","\n    ","\n    ","\n    ","\n      ","On the menu at the top of the project form, click ","Plan",".","\n    ","\n    ","\n    ","\n      ","Under the ","Forecast ","fast tab, click ","Item forecasts",".","\n    ","\n    ","\n    ","\n      ","On the menu above the table grid, click ","Validate lines",".","\n    ","\n    ","\n    ","\n      ","Review any donor restriction messages and take appropriate action.","\n    ","\n    ","Notes: ","\n    ","\n      ","Lines with issues display a red X or a yellow exclamation point under the Validation check column.","\n      ","If there are restrictions, one of the following two messages will display at the top of page.","\n    ","\n    ","\n    "],["\n    ","You have validated item forecast lines against the donor restrictions table.","\n    "],["\n    "],["\n    ","Use this procedure to approve item forecast lines. This action represents an approval to proceed with procuring the item or service.","\n    ","\n      ","Programs click ","Workflow > Submit"," to action the approval. After a short period of time (usually less than a minute), the line is auto-approved by the system as long as lines have been validated without errors.","\n      ","Once an item forecast line is approved, an item requirement line is created in the project.","\n    ","\n    "],["\n    ","\n      ","Status of the item forecast line is “Draft”.","\n      ","Draft lines have been validated without errors.","\n      ","All placeholder lines have been removed.","\n    ","\n    "],["\n    ","\n      ","Navigate modules to ","Project management and accounting > All projects",".","\n    ","\n    ","\n    ","\n      ","Search for, and open, the target project form.","\n    ","\n    ","\n    ","\n      ","On the menu at the top of the project form, click ","Plan",".","\n    ","\n    ","\n    ","\n      ","Under the ","Forecast ","fast tab, click ","Item forecasts",".","\n    ","\n    "],["\n    ","\n    ","\n      ","Click the selection circle next to the lines requiring approval. Multiple lines may be selected at once.","\n    ","\n    "],["\n    ","\n      ","On menu at top of page, click the three dots and select ","Workflow > Submit",".","\n    ","\n    "],["\n    ","\n    ","\n      ","Confirm the status of the lines have changed to ","In review",".","\n    ","\n    "],["\n    ","\n      ","Confirm that the status of the item forecast line(s) has changed to ","Approved",".","\n    ","\n    "],["\n    ","You have approved item forecast line(s) and item requirements have been created for each approved line for further processing by Supply Chain.","\n    "],["\n    "],["\n    ","Use this procedure to manually add a line the item forecast in Integra.","\n    "],["\n    ","\n      ","It has been verified that an item forecast line does not already exist for the requirement.","\n      ","Financial dimensions are known.","\n    ","\n    "],["\n    ","\n      ","Navigate modules to ","Project management and accounting > All projects",".","\n    ","\n    ","\n    ","\n      ","Search for, and open, the target project form.","\n    ","\n    ","\n    ","\n      ","On the menu at the top of the project form, click ","Plan",".","\n    ","\n    ","\n    ","\n      ","Under the ","Forecast ","fast tab, click ","Item forecasts",".","\n    ","\n    ","\n    "],["\n    ","Navigation Tips:","\n    ","\n      ","To view more of the item forecast lines, drag the double bars down to expand the view.","\n      ","Hide extraneous columns by right-clicking on the column header and selecting ","Hide this column",". Save any layout changes as a personalized view.","\n    ","\n    ","\n      ","To add a new item forecast line, on the menu at the top of page, click ","New",".","\n    ","\n    ","\n    ","A new line with status Draft is added to the table.","\n    ","\n      ","Complete the following fields for the new item forecast line:","\n    ","\n    ","\n      ","\n        ","\n          ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","Field","\n            ","\n            ","\n              ","Entry Required","\n            ","\n          ","\n          ","\n            ","\n              ","Model","\n            ","\n            ","\n              ","Ensure ","Obligated ","has defaulted in this field. If not, select it from the drop-down selection list.","\n            ","\n          ","\n          ","\n            ","\n              ","Requested receipt date ","\n            ","\n            ","\n              ","Select the date the item needs to be received into IRC’s inventory.","\n            ","\n          ","\n          ","\n            ","\n              ","Requested ship date","\n            ","\n            ","\n              ","Select the date the item will be distributed to beneficiaries.","\n            ","\n          ","\n          ","\n            ","\n              ","Item number","\n            ","\n            ","\n              ","Enter the product number for the item or service.","\n              ","If number is unknown, click the drop-down to perform a search and filter by “Product Name”.  If the required product cannot be found, ask your Supply Chain colleagues to support you or request the creation of the new product","\n              ","\n              ","If the information that defaults in the Product name field does not include enough detail, add more information in the ","Text"," field under the ","General ","tab.","\n            ","\n          ","\n          ","\n            ","\n              ","Site","\n            ","\n            ","\n              ","Select the relevant site from the drop-down selection list.","\n            ","\n          ","\n          ","\n            ","\n              ","Warehouse","\n            ","\n            ","\n              ","Select the destination storage warehouse.","\n            ","\n          ","\n          ","\n            ","\n              ","Sales quantity","\n            ","\n            ","\n              ","Enter the required order quantity.","\n            ","\n          ","\n          ","\n            ","\n              ","Cost price","\n            ","\n            ","\n              ","Enter the price of the item/service, if one has not defaulted.","\n            ","\n          ","\n          ","\n            ","\n              ","Sales price","\n            ","\n            ","\n              ","Enter or validate the correct sales price. Consult with Finance for correct sales price.","\n            ","\n          ","\n        ","\n      ","\n    ","\n    "," ","\n    ","\n    ","\n      ","Click the ","Project ","tab.","\n    ","\n    ","\n    ","\n      ","In the ","Category ","field, enter/select the correct project category for the item/service.","\n    ","\n    ","\n    ","\n      ","On the menu at the top, click ","Save",". This will copy the project category value to the subsequent project category (D2 financial dimension) field.","\n      ","Click the I","nventory dimensions"," tab.","\n      ","In the ","Location ","field, click the drop-down arrow and select the relevant location.","\n    ","\n    "],["\n    ","\n    ","\n      ","Click the ","Financial dimensions"," tab.","\n    ","\n    ","\n    ","\n      ","Validate/complete all the required financial dimensions for the item forecast line.","\n    ","\n    ","\n      ","The Project ID (D1), Project category (D2), and Reporting entity (D5) should default based on previous entries.","\n      ","Populate the Program area (D3), Operating unit (D4), and Functional area (D6) fields.","\n    ","\n    ","\n    ","\n      ","Click the ","Overview ","tab to return to the list of item forecast lines.","\n    ","\n    ","\n    ","\n      ","On the menu at the top of page, click ","Save",".","\n    ","\n    "],["\n    ","You have created a draft item forecast line directly in Integra.","\n    "],["\n    ","Programs must approve the item forecast line(s). Refer to the procedure ","Approve Item Forecast Lines"," for guidance..","\n    "],["\n    "],["\n    ","Use this procedure to make updates to the item forecast after the initial upload of the Excel template.","\n    ","Since IRC uploads the item forecast at the beginning of a project, it is likely that changes will need to be made. E.g., split item forecast lines, change quantity, delete line, etc.","\n    "],["\n    ","\n      ","The item forecast template has been uploaded to Integra.","\n      ","Status of item forecast line(s) is “Draft”.","\n    ","\n    "],["\n    ","\n      ","Navigate modules to ","Project management and accounting > All projects",".","\n    ","\n    ","\n    ","\n      ","Search for, and open, the target project form.","\n    ","\n    ","\n    ","\n      ","On the menu at the top of the project form, click ","Plan",".","\n    ","\n    ","\n    ","\n      ","Under the ","Forecast ","fast tab, click ","Item forecasts",".","\n    ","\n    ","\n    ","\n      ","Make any required updates to the item forecast lines.","\n      ","Save changes.","\n    ","\n    "],["\n    ","You have updated an item forecast in Integra.","\n    "],["\n    "],["\n    ","Use this procedure to view on-hand inventory quantities.","\n    "],["\n    ","\n      ","The item has been set up as an inventory item in Integra.","\n    ","\n    "],["\n    ","\n      ","From the Integra Home page, navigate the modules to ","Inventory management > Inquiries and reports > On-hand list",".","\n    ","\n    ","\n    ","\n      ","Apply any or all of the following filters by selecting the drop-down list for more filtering options:\n        ","\n          ","Item number","\n          ","Site","\n          ","Warehouse","\n          ","Project ID","\n        ","\n      ","\n    ","\n    "],["\n    ","\n      ","Click ","Dimensions ","on the menu at the top of the page to add additional inventory dimension values to the on-hand inquiry display.","\n    ","\n    ","\n    ","\n      ","Select the box next to all the relevant dimensions to display. E.g., Site, Warehouse, Location, Project ID, and Item number.","\n      ","Click ","OK ","to proceed.","\n    ","\n    ","\n    ","\n      ","Click ","Apply ","on the left-hand ","Filters ","pane to retrieve results.","\n    ","\n    ","\n    ","\n      ","Review the results of on-hand inventory displayed in the ","On-hand"," grid.","\n    ","\n    "],["\n    ","\n      ","Click ","X"," to close the ","On-hand inventory"," report when reviewing is complete.","\n    ","\n    "],["\n    ","You have viewed on-hand inventory quantities.","\n    "],["\n    "],["\n    ","Use this procedure to review or update item requirements that were generated from released item forecast lines.","\n    "],["\n    "],["\n    ","Item forecast line has been released by Programs.","\n    "],["\n    ","\n      ","Navigate modules to ","Project management and accounting > Projects > All projects",".","\n    ","\n    ","\n    ","\n      ","Search for, and open, the target project form.","\n    ","\n    ","\n    ","\n      ","On the menu at the top of the project form, click ","Plan",".","\n    ","\n    ","\n    ","\n      ","Under the ","Item requirements"," fast tab, click"," Item requirements",".","\n    ","\n    ","\n    ","\n      ","Review the list of item requirements for the project.","\n    ","\n    "],["\n    ","\n      ","Click ","Edit ","to update item requirement lines, if required.","\n    ","\n    "],["\n    ","You have reviewed item requirements for a project.","\n    ","A sales order line has been created for each item requirement line.","\n    "],["\n    "],["\n    ","Use this procedure to create purchase orders for items/services that are part of the item forecast.","\n    "],["\n    ","\n      ","Supply Chain has confirmed there is not enough on-hand stock to fulfill item requirement amount For instructions on viewing on-hand inventory, refer to training user guide, Inventory Management.","\n    ","\n    "],["\n    ","\n      ","Navigate modules to ","Project management and accounting > Projects > All projects",".","\n    ","\n    ","\n    ","\n      ","Search for, and open, the target project.","\n    ","\n    ","\n    ","\n      ","On the menu at the top of the project form, click ","Plan",".","\n    ","\n    ","\n    ","\n      ","On the action pane, click ","Item requirements",".","\n    ","\n    ","\n    ","\n      ","On the menu at the top of page, click ","Manage",".","\n    ","\n    ","\n    ","\n      ","Click ","Inquiries ","and select ","Sales order"," from the drop-down selection list.","\n    ","\n    ","\n    ","\n      ","Make note of, or copy, the sales order number.","\n      ","Navigate to ","Procurement and sourcing > Purchase orders > All purchase orders.","\n    ","\n    ","\n    ","\n      ","On the menu at the top of page, click ","Purchase order",".","\n    ","\n    ","\n    ","\n      ","Under the ","New ","action pane, click ","From a sales order",".","\n    ","\n    ","\n    ","\n      ","Under ","Lines ","section, click ","Select",".","\n    ","\n    ","\n    ","\n      ","In the row that displays ","Sales order",", enter the sales order number in the ","Criteria ","field.","\n      ","Click ","OK ","to proceed.","\n    ","\n    ","\n    ","\n      ","Select the checkbox under the ","Include ","column for the item/service to be procured.","\n      ","In the ","Vendor account ","field, enter the vendor number from whom the item/service will be purchased.","\n    ","\n    ","\n    ","\n      ","Click ","OK"," to proceed.","\n    ","\n    ","\n    ","\n      ","Click the PO number that was just created to open the PO form.","\n    ","\n    "],["\n    ","\n    ","\n      ","Click the ","Header ","tab and scroll down to the Setup section of header.","\n    ","\n    ","\n    ","\n      ","On the menu at the top of page, click ","Edit",".","\n      ","In the ","Requester ","field, enter the name of the requestor.","\n    ","\n    "],["\n    ","\n    ","\n      ","On the menu at the top of page, click ","Workflow ","and submit the PO for approval.","\n      ","Once approved, confirm and transmit the PO to vendor. Refer to the procedure in this user guide titled, Confirm PO and Transmit to Vendor.","\n    ","\n    "],["\n    ","You have created a PO for a service/item identified in the item forecast.","\n    "],["\n    "],["\n    ","Use this procedure to submit a PO for approval.","\n    ","If initial delivery will be made to a location other than the final warehouse location, e.g., point of entry, update the delivery address field to reflect the delivery location and include note that says items should be transferred from point of entry to final warehouse location.","\n    "],["\n    ","\n      ","PO has status “Draft”.","\n    ","\n    "],["\n    ","\n      ","From the Integra home page, navigate modules to ","Procurement and sourcing > Purchase orders > All purchase orders",".","\n    ","\n    "],["\n    ","\n    "],["\n    ","\n      ","Locate and click the relevant PO number to open the PO form.","\n    ","\n    ","\n    "],["\n    ","\n      ","Validate the following fields in each line for accuracy and completion.","\n    ","\n    ","\n      ","\n        ","\n          ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","Field","\n            ","\n            ","\n              ","Required entry","\n            ","\n          ","\n          ","\n            ","\n              ","Item number","\n            ","\n            ","\n              ","Confirm the product identifier number associated with a Product Name in Integra.","\n            ","\n          ","\n          ","\n            ","\n              ","Product name","\n            ","\n            ","\n              ","Confirm the correct product is being ordered.","\n            ","\n          ","\n          ","\n            ","\n              ","Quantity","\n            ","\n            ","\n              ","Confirm the quantity is correct.","\n            ","\n          ","\n          ","\n            ","\n              ","Vendor account/name","\n            ","\n            ","\n              ","Confirm or enter the Vendor account number.","\n            ","\n          ","\n          ","\n            ","\n              ","Account","\n            ","\n            ","\n              ","Review the account string to ensure the main account and all D codes are correct for the expenditure.","\n              ","Tip: Click in this field to activate a pop-up window with account code details.","\n            ","\n          ","\n        ","\n      ","\n    ","\n    ","\n      ","Scroll down to the ","Line details ","section of PO and click the ","Address ","tab.","\n    ","\n    ","\n    ","\n      ","If the items will initially be delivered to a location other than the destination IRC warehouse, e.g., point of entry airport, select the location from the drop-down selection list in the ","Delivery address ","field. Additionally, in the text box under Attention information, enter a note identifying the final destination location.","\n      ","Click the ","Header ","tab and scroll down to the Setup section of header.","\n    ","\n    ","\n    ","\n      ","On the menu at the top of page, click ","Edit",".","\n      ","In the ","Requester ","field, enter the name of the requestor.","\n    ","\n    "],["\n    ","\n    ","\n      ","On the toolbar at the top of page, click ","Workflow"," and click ","Submit",".","\n    ","\n    "],["\n    ","You have reviewed and submitted a PO to workflow for approval.","\n    "],["\n    ","Once PO is approved, confirm PO and transmit to vendor.","\n    "],["\n    "],["\n    ","Use this procedure to confirm a PO that has been fully approved.","\n    "],["\n    "],["\n    ","\n      ","PO has status ","Approved","\n    ","\n    "],["\n    ","\n      ","From the Integra home page, navigate modules to ","Procurement and sourcing > Purchase orders > All purchase orders",".","\n    ","\n    ","\n    ","\n      ","Locate the relevant PO and click the PO number to open the PO form.","\n    ","\n    ","\n    ","\n      ","On the menu at the top of page, click ","Purchase",".","\n    ","\n    ","\n    ","\n      ","Under the ","Update ","action pane, click ","Order confirmation"," ","details",".","\n    ","\n    "],["\n    ","\n    ","\n      ","In the ","Confirmation report"," field, select the relevant option from the drop-down selection list.","\n    ","\n    ","Notes about Terms and Conditions:","\n    ","Terms and Conditions are standard texts that get applied to all IRC purchase orders","\n    ","\n      ","For item POs that ","do not"," reference a purchase agreement, select the last option, ","Purchase order with terms and conditions."," This ensures the PO will be transmitted to vendor with the terms and conditions displayed on the PO output.","\n      ","For service POs that ","do not"," reference a purchase agreement, select one of:","\n      "," ","Service order less than $2.5 K with terms and conditions","\n      "," ","Service order greater than $2.5 K with terms and condition","\n      ","For item POs that were created with reference to a purchase agreement, select ","Purchase with no terms and conditions",". (The terms and conditions will default from the agreement)","\n    ","\n    ","\n      ","Click ","OK ","to proceed.","\n    ","\n    ","\n    ","\n      ","Under the ","Generate ","action pane, click ","Confirm",".","\n      ","To view the PO, click ","Purchase order confirmation"," under the ","Journals ","fast tab.","\n      ","If required, export the PO to PDF format by clicking ","Export > PDF",".","\n    ","\n    "],["\n    ","You have confirmed a PO and transmitted PO to vendor.","\n    "],["\n    ","The following reports are available for managing fixed assets.","\n    "],["\n    "],["\n    ","Use this procedure to view all purchase orders that have been created for a project.","\n    "],["\n    ","\n      ","Planned order was converted to a purchase order.","\n    ","\n    "],["\n    ","\n      ","Navigate modules to ","Project management and accounting > Projects > All projects",".","\n      ","Open the project form.","\n    ","\n    ","\n    ","\n      ","On the menu at the top, click ","Manage",".","\n    ","\n    ","\n    ","\n      ","Under ","Related information",", click ","Item tasks"," and select ","Purchase orders"," from the drop-down selection list.","\n    ","\n    ","\n    ","\n      ","Review the list of purchase orders that have been generated for the project. Scroll to the right to see more information.","\n    ","\n    ","\n      ","To open the actual PO, click the PO number.","\n    ","\n    "],["\n    ","You have displayed a list of all purchase orders linked to a project.","\n    "],["\n    "],["\n    ","There is a customized workflow that checks set conditions of each item forecast line. If any of the conditions below exist, the item forecast line will be rejected and an item requirement will not get generated for that line. Below are the details of the workflow conditions that will cause an item forecast line to be rejected.","\n    ","\n      ","\n        ","\n          ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","Condition","\n            ","\n            ","\n              ","Reason for Rejection","\n            ","\n          ","\n          ","\n            ","\n              ","1","\n            ","\n            ","\n              ","If item is a “placeholder” item, the line will be rejected.","\n            ","\n          ","\n          ","\n            ","\n              ","2","\n            ","\n            ","\n              ","If item is “ineligible”, the line will be rejected.","\n            ","\n          ","\n          ","\n            ","\n              ","3","\n            ","\n            ","\n              ","If requested date is before tomorrow, the line will be rejected.","\n            ","\n          ","\n          ","\n            ","\n              ","4","\n            ","\n            ","\n              ","If forecast model “estimated” is entered under the ","Model ","column, the line will be rejected. The value “obligated” must be entered.","\n            ","\n          ","\n          ","\n            ","\n              ","5","\n            ","\n            ","\n              ","If emergency status is X….","\n            ","\n          ","\n          ","\n            ","\n              ","6","\n            ","\n            ","\n              ","If any required financial dimensions are missing the line will be rejected.","\n            ","\n          ","\n        ","\n      ","\n    ","\n    "," ","\n  ","\n\n","\n  ","\n    ","                                                                                        ","\n","\n","\n               rescuenet.rescue.org/i/integra-support","\n          ","\n\n"]],"2":[["Business Process Information"]],"3":[["Approval Stage of Proposal/Project"],["Process Flow - Item Forecast to Item Requirements"],["Purchase Order Processing from Item Requirements"],["Items Not Procured using the Item Forecast"],["Populate the Item Forecast Template"],["Upload the Item Forecast Template to Box"],["Validate Uploaded Item Forecast Lines Against Donor Restricted Items"],["Approve Item Forecast Lines"],["Create an Item Forecast Line Directly in Integra"],["Update Item Forecast in Integra"],["Display On-hand Inventory"],["Review and/or Update Item Requirement(s) in Project"],["Create Purchase Order from Sales Order"],["Review Draft Purchase Order and Submit for Approval"],["Confirm PO and Transmit to Vendor"],["Reporting / Inquiries"],["View Purchase Orders for a Project"],["Appendix"],["Pass/Fail Conditions when Approving Item Forecast Lines"]],"4":[["Purpose"],["Prerequisites"],["Steps"],["Result"],["Purpose"],["Prerequisites"],["Steps"],["Result"],["Next Steps"],["Purpose"],["Prerequisites"],["Steps"],["Result"],["Purpose"],["Prerequisites"],["Steps"],["Result"],["Purpose"],["Prerequisites"],["Steps"],["Result"],["Next Steps"],["Purpose"],["Prerequisites"],["Steps"],["Result"],["Purpose"],["Prerequisites"," "],["Steps"],["Result"],["Purpose"],["Prerequisites"],["Steps"],["Result"],["Purpose"],["Prerequisites"],["Steps"],["Result"],["Purpose"],["Prerequisites"],["Steps"],["Result"],["Next Steps…."],["Purpose"],["Prerequisites"],["Steps"],["Result"],["Purpose"],["Prerequisites"],["Steps"],["Result"]],"5":[["Note",": A list of existing item forecast lines for the project is displayed."],["Tip",": Filter on the Status field to show only item forecast lines in draft status."],["Note",": If the three dots are not displayed, click Workflow on the menu at the top of page to perform the same action."],["Note",": These lines will be auto-approved within a minute (approximately)."],["Note",": A list of existing item forecast lines for the project displays."],["Notes",":","\n        If required, this value may be changed at the time of receipt.","\n        For services, always select location ","Non-stock","."],["Note",": If additional filters are needed, clickAdd to select other values such as Project ID or Location."],["Note",": Use the Filter in the Filter pane to collapse or expand the pane, as required."],["Note",": Only Supply Chain can make changes to an item requirement line."],["Tip",": Add the column “Reference number” to the table grid to view associated purchase order numbers. This field is also available on the Other tab. If column is added, save it to personalized view."],["Note",": New POs are typically displayed at the bottom of the Purchase Order List Page."],["Important",": This name determines the person to whom the PO is routed for workflow approval. Entering a requester’s name in the header of the PO will apply that requester to all lines in the PO. If requester may be different for some lines, the requester must be added at the line level."],["Note",": Project POs can also be accessed from within the project itself. Refer to the following procedure in this user guide for instructions: ","View Purchase Orders for a Project","."],["Note",": Ensure the ","Purchase Order List"," view is active. If not, click the drop-down arrow to select it and pin it as your default view. This view has been customized for Integra users."],["Note",": Ensure the ","Purchase Order LIst ","view is active. If not, click the drop-down arrow to select it and pin it as your default view. This view has been customized for Integra users."],["Important",": This name determines the person to whom the PO is routed for workflow approval. Entering a requester’s name in the header of the PO will apply that requester to all lines in the PO. If requester may be different for some lines, the requester must be added at the line level."],["Important",": The confirmation step is required before the PO can be transmitted to vendor."],["Note",": This step enables the selection of parameters that determine what information displays on the PO. E.g., terms and conditions."]],"id":"14"})