import { Component } from "react";
import { Map as PigeonMap, Marker } from "pigeon-maps"

export class Map extends Component {
    render() {
        return (
            <PigeonMap height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                <Marker width={50} anchor={[50.879, 4.6997]} />
            </PigeonMap>
        );
    }
}