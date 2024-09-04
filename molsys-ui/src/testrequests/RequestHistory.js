import {Container, Grid, makeStyles, React, useEffect, useState,} from "../component"
import MUIDataTable from "mui-datatables";
import {appNotification} from "../shared/notification/app-notification";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TestFlow from "../testrequests/TestFlow";
import {useGlobalStyles} from "../styles/GlobalStyles";
import {getRequestHistoryOptions} from "../authority/shared/view-all-request-options";



function RequestHistory(props) {
    const classes = useGlobalStyles();

    const [data, setData] = useState([]);

    const [requests, setRequests] = useState([]);



    let columns = [
       {
            name: "Order ID",
            options: {
                filter: true,
            }
        },
        {
            name: "service",
            options: {
                filter: true,
            }
        },
        {

            name: "Amount OF Data",
            options: {
                filter: true,
            }
        },
        {

            name: "Quantity",
            options: {
                filter: true,
            }
        },
        
        {

            name: "Isolation",
            options: {
                filter: true,
            }
        },
        
        {

            name: "Analysis",
            options: {
                filter: true,
            }
        },

        {

            name: "Status",
            options: {
                filter: true,
            }
        }

    ];

    const {actionColumns} =props

    if(actionColumns && actionColumns.length > 0)
        columns= columns.concat(actionColumns);

    const options = getRequestHistoryOptions(requests)
    // const oldOptions = {
    //     filter: true,
    //     filterType: 'dropdown',
    //     responsive: 'standard',
    //     selectableRows:'none',
    //     expandableRows: true,
    //     expandableRowsHeader: false,
    //     expandableRowsOnClick: false,
    //     isRowExpandable: (dataIndex, expandedRows) => {
    //         const testRequest =  getTestRequest(dataIndex)
    //
    //         return testRequest.status !== "INITIATED";
    //     },
    //     renderExpandableRow: (rowData, rowMeta) => {
    //
    //         const {dataIndex} = rowMeta
    //
    //         const testRequest =  getTestRequest(dataIndex)
    //         const {requestId} =  testRequest
    //         const colSpan = rowData.length + 1;
    //         return (
    //             <TableRow>
    //                 <TableCell colSpan={colSpan}>
    //                     <TestFlow requestId={requestId}></TestFlow>
    //                 </TableCell>
    //             </TableRow>
    //         );
    //
    //     },
    //     onRowExpansionChange: (curExpanded, allExpanded, rowsExpanded) => {
    //
    //     }
    // };






    function reloadTests() {

        const {getMyHistory,onDataLoaded} = props
        getMyHistory()
            .subscribe((allTestRequests) => {


                setRequests(allTestRequests)
                const buffer = allTestRequests.map(item=>{
                    console.log(typeof(item.service),typeof(item.amountOfData),typeof(item.quantity),typeof(item.isolation),typeof(item.analysis),typeof(item.status))
                    return [item.orderID,item.service,item.amountOfData,item.quantity,item.isolation,item.analysis,item.status]
                })

                const results = []
                results.push(buffer)
                setData(buffer)
                if(onDataLoaded)
                    onDataLoaded(allTestRequests)

            }, (error => {

                // console.log(error)
                appNotification.showError(error)
            }))
    }


    useEffect(() => {


        reloadTests();





    }, [])


    return (
        <React.Fragment>
            <Container maxWidth="md" component="main" className={classes.heroContent}>
                <h1>
                     History
                </h1>
                <hr />
            </Container>
            <Container component="main" maxWidth="md">
                <Grid container>
                    <Grid item md={12}>

                        <MUIDataTable title={"Request History"} data={data} columns={columns} options={options} />

                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>

    )

}

export default RequestHistory;
