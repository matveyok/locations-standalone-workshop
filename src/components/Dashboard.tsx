import React from "react";
import "./Dashboard.css";
import { Location } from "../types";
import { Button, Page, Table } from "@wix/design-system";
import {createClient } from '@wix/sdk'
import { dashboard } from '@wix/dashboard'

const wixClient = createClient({
    host: dashboard.host(),
    auth: dashboard.auth(),
    modules: {
        dashboard
    }
})

const locations: Location[] = [
  {
    name: "Tel Aviv",
    coord: {
      latitude: 32.0852997,
      longitude: 34.7818064,
    },
  },
  {
    name: "Be'er Sheva",
    coord: {
      latitude: 31.2457442,
      longitude: 34.7925181,
    },
  },
];

function Dashboard() {
  return (
    <Page>
      <Page.Header
        title="Our Locations"
        actionsBar={<Button onClick={() => {
            wixClient.dashboard.navigate('71e35f24-8eb7-41b0-b261-c2259a76372f')
        }}>Update Locations</Button>}
      />
      <Page.Content>
        <Table
        rowVerticalPadding="medium"
          data={locations}
          columns={[
            {
              title: "Name",
              render: (location) => location.name,
            },
            {
              title: "Coords",
              render: (location) =>
                `${location.coord.latitude.toFixed(
                  2
                )},${location.coord.longitude.toFixed(2)}`,
            },
          ]}
        >
            <Table.Content />
        </Table>
      </Page.Content>
    </Page>
  );
}

export default Dashboard;
