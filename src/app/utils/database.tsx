import { DocumentClient } from 'documentdb';
import * as React from 'react';


interface RoutesDbProps{

};

interface RoutesDbState{

};

export class RoutesDatabase extends React.Component<RoutesDbProps, RoutesDbState> {
    host = 'https://climbing-routes.documents.azure.com:443/';
    masterKey = 'VEQTVcgmTcKg2SmHtkOERgkobRo2gkAVCnR134nTydZsiVW7lZV3FSkEYKwfOh25bfcuClJDmaXj8qDpNVZQ5Q==';
    client = new DocumentClient(this.host, { masterKey: this.masterKey });

    databaseDefinition = { id: "sample database" };
    collectionDefinition = { id: "sample collection" };
    documentDefinition = { id: "hello world doc", content: "Hello World!" };

    public InitDb() {
        this.client.createDatabase(this.databaseDefinition, function (err, database) {
            if (err) return console.log(err);
            console.log('created db');

            this.client.createCollection(database._self, this.collectionDefinition, function (err, collection) {
                if (err) return console.log(err);
                console.log('created collection');

                this.client.createDocument(collection._self, this.documentDefinition, function (err, document) {
                    if (err) return console.log(err);
                    console.log('Created Document with content: ', document.content);

                    // cleanup(this.client, database);
                });
            });
        });

        function cleanup(client, database) {
            client.deleteDatabase(database._self, function (err) {
                if (err) console.log(err);
            })
        }
    };

    render(){
        return(
            <div>
                <button onClick={this.InitDb}>Init DB</button>
            </div>
        );
    };
}