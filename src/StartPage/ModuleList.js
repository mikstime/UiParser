//******************************************************************************
// Created by MBTSKY on 2019-05-17.
//******************************************************************************

import React, {Fragment} from 'react';
import './css/ModuleList.sass'
import ModuleItem from "./ModuleItem";

import Sortable from 'react-sortablejs';
import uuid from 'uuid/v4'

class ModuleList extends React.Component {

    constructor(props) {
        super(props);
        //@TODO dynamic load
        this.state = {
            items :
                [
                    {
                        moduleName : "Filter Editor"
                    },
                    {
                        moduleName : "Particle Recognizer"
                    },
                    {
                        moduleName : "Position Tracker"
                    },
                    {
                        moduleName : "Position Logger"
                    }
                ]
        };
        this.sortable = null;
    }
    render() {
        return (
            <Sortable
                options={{}}
                tag="ul"
                className="module-list"
                ref={(c) => {
                    if (c) {
                        this.sortable = c.sortable;
                    }
                }}
            >
                {this.state.items.map((desc) => (
                    <ModuleItem
                        descriptor={desc}
                        key={uuid()}/>
                ))}
            </Sortable>
        )
    }
}

export default ModuleList;