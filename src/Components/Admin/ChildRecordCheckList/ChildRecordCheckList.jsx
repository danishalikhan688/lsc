import React, { Component } from 'react'
import { Container, Grid, Form, Button, TextArea } from 'semantic-ui-react';
import { connect } from "react-redux";
import { ExportToCsv } from 'export-to-csv';
class ChildRecordCheckList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalType: '',
            modalHeader: '',
            modalDescription: '',
            modalOpen: false
        }
    }
    componentDidMount() {
        // let { pathname, state } = this.props.history.location;
        // if (this.props.loginUserInfo.role_id === 2) {
        //     // fetching classes list which is used to assign to incident
        //     this.getClassesList();
        //     if (pathname === "/edit-incident") {
        //         if (!state || !state.activeIncidentId) this.props.history.push('/incidents')
        //         this.setState({
        //             incident_id: state.activeIncidentId
        //         }, () => {
        //             this.getTargetedIncident()
        //         })
        //     }
        // } else {
        //     // if the login user is not admin redirect to home
        //     this.props.history.push('/home')
        // }
    }
    render() {
        var data = [
            {
                name: 'Test 1',
                age: "✔️",
                average: 8.2,
                approved: true,
                description: "using 'Content here, content here' "
            },
            {
                name: 'Test 2',
                age: 11,
                average: 8.2,
                approved: true,
                description: "using 'Content here, content here' "
            },
            {
                name: 'Test 4',
                age: 10,
                average: 8.2,
                approved: true,
                description: "using 'Content here, content here' "
            },
        ];
        const options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalSeparator: '.',
            showLabels: true,
            showTitle: true,
            title: 'My Awesome CSV',
            useTextFile: false,
            useBom: true,
            useKeysAsHeaders: true,
            // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
        };
        const handleClick = () => {
            const csvExporter = new ExportToCsv(options);

            csvExporter.generateCsv(data);
        }

        return (
            <div>
                <Container className="main-layout-height mt-5rem">
                    <button onClick={handleClick}>
                        Download CSV
                    </button>
                </Container>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    loginUserInfo: state.loginReducer.loginUserInfo,
});

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ChildRecordCheckList);

