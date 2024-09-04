import {Container, Grid, React, useEffect, useState,} from "../component"
import {doGetAllTestRequestsWithThreshold} from "./shared/authorityDispatcher";
import {useGlobalStyles} from "../styles/GlobalStyles";
import {getRequestHistoryOptions} from "./shared/view-all-request-options";
import MUIDataTable from "mui-datatables";
import {errorHandler} from "../shared/common-helpers";


function ViewAllRequests() {


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


    const options = getRequestHistoryOptions(requests)






    function reloadTests() {


        doGetAllTestRequestsWithThreshold()
            .subscribe((allTestRequests) => {

                setRequests(allTestRequests)
                const buffer = allTestRequests.map(item=>{

                    const status= item.pinCodeInfo.zoneType
                     
                    return [item.orderID,item.service,item.quantity,item.amountOfData,item.isolation,item.analysis,status]
                })

                const results = []
                results.push(buffer)
                setData(buffer)



                    setRequests(allTestRequests)

            }, errorHandler)
    }


    useEffect(() => {


        reloadTests();





    }, [])


    return (
        <React.Fragment>
            <Container maxWidth="md" component="main" className={classes.heroContent}>
                <h1>
                    Request History
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

export default ViewAllRequests
