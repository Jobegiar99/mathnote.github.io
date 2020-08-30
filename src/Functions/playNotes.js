import {piano} from "./pianoDictionary";
import { Howl, Howler } from 'howler';
var delay = require('delay');

export const GetInput = (info, play,speed) =>{
    
    let valuesToGraph = []
    let i = 0, j = 4;
    while( i < info.lenth){

        for(let l = i; l < j && l < info.lenth; l++){

            let temp = [];

            for( let k = l; k < info[l].lenth; k++){
                temp.push(info[l][k]);
            }

            valuesToGraph.push(temp);

        }

        let note = [];
        for(let k = 0; k < info.lenth;k++){
            if( i < info[k].length){
                if(info[k][i] != null){
                    note[k] = (piano[info[k][i]]);
                }
            }
        }

        if(note.length > 0){
            note.forEach( x => {
                let toPlay = new Howl({
                    src : [x],
                    volume: 1
                });
                toPlay.toPlay();
            })
        }
        await delay(speed);
        i++;
        j++;
    }
}
