import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn, moveInLeft } from '../../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as ShortHash from 'shorthash';
import { UserInfo } from '../../model/userinfo';
import { AttendantInfo } from '../../model/attendantInfo';


@Component({
  selector: 'app-generatecode',
  templateUrl: './generatecode.component.html',
  styleUrls: ['./generatecode.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class GeneratecodeComponent implements OnInit {

  userCollection: AngularFirestoreCollection<UserInfo>;
  users: Observable<UserInfo[]>;
  message: string = "";
  
  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
  }

  generatecodeforAll() {

var a = [  
   {
     "FIELD1": "+60123066333",
     "FIELD2": "13KECU"
   },
   {
     "FIELD1": "+60123033253",
     "FIELD2": "13XCMY"
   },
   {
     "FIELD1": "+60123031283",
     "FIELD2": "13XMNK"
   },
   {
     "FIELD1": "+60123031969",
     "FIELD2": "13XOB7"
   },
   {
     "FIELD1": "+60123162201",
     "FIELD2": "15NOPR"
   },
   {
     "FIELD1": "+60123116123",
     "FIELD2": "15U0EN"
   },
   {
     "FIELD1": "+60149927948",
     "FIELD2": "1C2DFN"
   },
   {
     "FIELD1": "+60173006486",
     "FIELD2": "1CJDCP"
   },
   {
     "FIELD1": "+60178801468",
     "FIELD2": "1D93YI"
   },
   {
     "FIELD1": "+60199590215",
     "FIELD2": "1DBTDB"
   },
   {
     "FIELD1": "+60123513522",
     "FIELD2": "1DK9R3"
   },
   {
     "FIELD1": "+60178841880",
     "FIELD2": "1DPLNN"
   },
   {
     "FIELD1": "+601111040324",
     "FIELD2": "1FDE2R"
   },
   {
     "FIELD1": "+60123613011",
     "FIELD2": "1FOG56"
   },
   {
     "FIELD1": "+60123636776",
     "FIELD2": "1FWOL1"
   },
   {
     "FIELD1": "+60165212839",
     "FIELD2": "1IPJ1U"
   },
   {
     "FIELD1": "+60123811757",
     "FIELD2": "1JWHMR"
   },
   {
     "FIELD1": "+60149045657",
     "FIELD2": "1JYKO8"
   },
   {
     "FIELD1": "+60123889490",
     "FIELD2": "1KQNQV"
   },
   {
     "FIELD1": "+60123900233",
     "FIELD2": "1LWCDR"
   },
   {
     "FIELD1": "+60173502416",
     "FIELD2": "1MDKO4"
   },
   {
     "FIELD1": "+60165453873",
     "FIELD2": "1NEXHF"
   },
   {
     "FIELD1": "+60165533152",
     "FIELD2": "1PAVRK"
   },
   {
     "FIELD1": "+601111556534",
     "FIELD2": "1Q4AUY"
   },
   {
     "FIELD1": "+60173778600",
     "FIELD2": "1RGIZJ"
   },
   {
     "FIELD1": "+60122544200",
     "FIELD2": "1T1RGG"
   },
   {
     "FIELD1": "+601111751776",
     "FIELD2": "1UBLSV"
   },
   {
     "FIELD1": "+60128830621",
     "FIELD2": "1UNJLU"
   },
   {
     "FIELD1": "+60173986803",
     "FIELD2": "1VSN9U"
   },
   {
     "FIELD1": "+60194726657",
     "FIELD2": "1WZ1XO"
   },
   {
     "FIELD1": "+60165937320",
     "FIELD2": "1XRYIA"
   },
   {
     "FIELD1": "+60163633400",
     "FIELD2": "1Y76OJ"
   },
   {
     "FIELD1": "+60103111212",
     "FIELD2": "22V3HC"
   },
   {
     "FIELD1": "+60124101777",
     "FIELD2": "28VLB2"
   },
   {
     "FIELD1": "+60124335540",
     "FIELD2": "2CQK79"
   },
   {
     "FIELD1": "+60182138108",
     "FIELD2": "2FMPEP"
   },
   {
     "FIELD1": "+60182395148",
     "FIELD2": "2JSGHY"
   },
   {
     "FIELD1": "+60166209669",
     "FIELD2": "2LSBWY"
   },
   {
     "FIELD1": "+60166222131",
     "FIELD2": "2M0NXR"
   },
   {
     "FIELD1": "+60129317801",
     "FIELD2": "2N1UNC"
   },
   {
     "FIELD1": "+60122116311",
     "FIELD2": "2NY26"
   },
   {
     "FIELD1": "+60166319296",
     "FIELD2": "2O1ME3"
   },
   {
     "FIELD1": "+60166333199",
     "FIELD2": "2O8HJS"
   },
   {
     "FIELD1": "+60174580942",
     "FIELD2": "2QH6MI"
   },
   {
     "FIELD1": "+60174588300",
     "FIELD2": "2QI8G9"
   },
   {
     "FIELD1": "+60166516103",
     "FIELD2": "2S9EBE"
   },
   {
     "FIELD1": "+60129691916",
     "FIELD2": "2TJDWO"
   },
   {
     "FIELD1": "+60174704776",
     "FIELD2": "2TSKFU"
   },
   {
     "FIELD1": "+60108964636",
     "FIELD2": "2U6S9T"
   },
   {
     "FIELD1": "+60174755387",
     "FIELD2": "2UDMBO"
   },
   {
     "FIELD1": "+60166688981",
     "FIELD2": "2UG8BD"
   },
   {
     "FIELD1": "+60122130268",
     "FIELD2": "2VKA7"
   },
   {
     "FIELD1": "+60179308200",
     "FIELD2": "2VULTC"
   },
   {
     "FIELD1": "+60122141001",
     "FIELD2": "2ZVMV"
   },
   {
     "FIELD1": "+60174797687",
     "FIELD2": "3MILN"
   },
   {
     "FIELD1": "+60122269373",
     "FIELD2": "4MQ06"
   },
   {
     "FIELD1": "+60122274286",
     "FIELD2": "4QFTH"
   },
   {
     "FIELD1": "+60172040500",
     "FIELD2": "9T5XO"
   },
   {
     "FIELD1": "+60122527232",
     "FIELD2": "AIGJO"
   },
   {
     "FIELD1": "+601128346604",
     "FIELD2": "B21VT"
   },
   {
     "FIELD1": "+601123846763",
     "FIELD2": "B4DCY"
   },
   {
     "FIELD1": "+60122611290",
     "FIELD2": "CHXVE"
   },
   {
     "FIELD1": "+60143331061",
     "FIELD2": "CI2PK"
   },
   {
     "FIELD1": "+60169813669",
     "FIELD2": "CRCV8"
   },
   {
     "FIELD1": "+60172296146",
     "FIELD2": "DWSQK"
   },
   {
     "FIELD1": "+60122764321",
     "FIELD2": "F7PCM"
   },
   {
     "FIELD1": "+60122782707",
     "FIELD2": "FFJ15"
   },
   {
     "FIELD1": "+60172421664",
     "FIELD2": "HBBF4"
   },
   {
     "FIELD1": "+60122071570",
     "FIELD2": "HBLX"
   },
   {
     "FIELD1": "+60127377053",
     "FIELD2": "HDNDW"
   },
   {
     "FIELD1": "+60164330309",
     "FIELD2": "HVFRU"
   },
   {
     "FIELD1": "+60143658035",
     "FIELD2": "IDU4L"
   },
   {
     "FIELD1": "+60122927528",
     "FIELD2": "J0EH3"
   },
   {
     "FIELD1": "+60122961130",
     "FIELD2": "JFGXT"
   },
   {
     "FIELD1": "+60122993273",
     "FIELD2": "JSAQY"
   },
   {
     "FIELD1": "+60127577152",
     "FIELD2": "LM4LW"
   },
   {
     "FIELD1": "+60172678827",
     "FIELD2": "M692M"
   },
   {
     "FIELD1": "+60127607321",
     "FIELD2": "MWIRR"
   },
   {
     "FIELD1": "+60127609718",
     "FIELD2": "MX0TO"
   },
   {
     "FIELD1": "+60169161303",
     "FIELD2": "OIMT0"
   },
   {
     "FIELD1": "+60143958035",
     "FIELD2": "OPRSN"
   },
   {
     "FIELD1": "+601110656767",
     "FIELD2": "P2GPJ"
   },
   {
     "FIELD1": "+601110669883",
     "FIELD2": "P6JJP"
   },
   {
     "FIELD1": "+60127738693",
     "FIELD2": "PECN5"
   },
   {
     "FIELD1": "+60172823469",
     "FIELD2": "PSNUL"
   },
   {
     "FIELD1": "+60193863880",
     "FIELD2": "VN13B"
   },
   {
     "FIELD1": "+601123704238",
     "FIELD2": "YIWAU"
   },
   {
     "FIELD1": "+60167471046",
     "FIELD2": "Z1ACFWN"
   },
   {
     "FIELD1": "+60162965371",
     "FIELD2": "Z1ADA5Y"
   },
   {
     "FIELD1": "+60162933520",
     "FIELD2": "Z1APCCQ"
   },
   {
     "FIELD1": "+60162928469",
     "FIELD2": "Z1AT2AE"
   },
   {
     "FIELD1": "+60183696629",
     "FIELD2": "Z1AYRHW"
   },
   {
     "FIELD1": "+60183668770",
     "FIELD2": "Z1BBNXG"
   },
   {
     "FIELD1": "+60162879678",
     "FIELD2": "Z1CCG2K"
   },
   {
     "FIELD1": "+60167375620",
     "FIELD2": "Z1CFOUE"
   },
   {
     "FIELD1": "+886984289785",
     "FIELD2": "Z1G7YWC"
   },
   {
     "FIELD1": "+60146302230",
     "FIELD2": "Z1IN3BS"
   },
   {
     "FIELD1": "+60175185668",
     "FIELD2": "Z1J4RMB"
   },
   {
     "FIELD1": "+60167027765",
     "FIELD2": "Z1JDIO5"
   },
   {
     "FIELD1": "+601121056308",
     "FIELD2": "Z1KAP3P"
   },
   {
     "FIELD1": "+60183199610",
     "FIELD2": "Z1LK7XL"
   },
   {
     "FIELD1": "+60123156784",
     "FIELD2": "Z1LMIM4"
   },
   {
     "FIELD1": "+60183127004",
     "FIELD2": "Z1LMSSJ"
   },
   {
     "FIELD1": "+60125442331",
     "FIELD2": "Z1M6XXD"
   },
   {
     "FIELD1": "+60125293941",
     "FIELD2": "Z1PTJK3"
   },
   {
     "FIELD1": "+60167956363",
     "FIELD2": "Z1QP4OL"
   },
   {
     "FIELD1": "+60162154600",
     "FIELD2": "Z1RFO67"
   },
   {
     "FIELD1": "+60167829530",
     "FIELD2": "Z1SF0OG"
   },
   {
     "FIELD1": "+60167820878",
     "FIELD2": "Z1SGADE"
   },
   {
     "FIELD1": "+60167861141",
     "FIELD2": "Z1SPMHR"
   },
   {
     "FIELD1": "+60183996216",
     "FIELD2": "Z1UMUV4"
   },
   {
     "FIELD1": "+60183869245",
     "FIELD2": "Z1X3QXP"
   },
   {
     "FIELD1": "+60172912970",
     "FIELD2": "Z1YEGQ2"
   },
   {
     "FIELD1": "+60167514018",
     "FIELD2": "Z1YW8JW"
   },
   {
     "FIELD1": "+60123826003",
     "FIELD2": "Z2RYIT3"
   },
   {
     "FIELD1": "+60187719629",
     "FIELD2": "Z2SFT6N"
   },
   {
     "FIELD1": "+60166912153",
     "FIELD2": "Z2TLTQI"
   },
   {
     "FIELD1": "+60192699411",
     "FIELD2": "ZADIQY"
   },
   {
     "FIELD1": "+60176413882",
     "FIELD2": "ZAFBDC"
   },
   {
     "FIELD1": "+60126899783",
     "FIELD2": "ZAO8YU"
   },
   {
     "FIELD1": "+60175908963",
     "FIELD2": "ZASXOR"
   },
   {
     "FIELD1": "+60122052451",
     "FIELD2": "ZB7M"
   },
   {
     "FIELD1": "+60126683642",
     "FIELD2": "ZEBGNV"
   },
   {
     "FIELD1": "+60126678821",
     "FIELD2": "ZEEF3G"
   },
   {
     "FIELD1": "+60126646715",
     "FIELD2": "ZER8TH"
   },
   {
     "FIELD1": "+60126618338",
     "FIELD2": "ZF46TX"
   },
   {
     "FIELD1": "+60126581638",
     "FIELD2": "ZGFELR"
   },
   {
     "FIELD1": "+60192334348",
     "FIELD2": "ZGOKF9"
   },
   {
     "FIELD1": "+60176112566",
     "FIELD2": "ZGRHPF"
   },
   {
     "FIELD1": "+60126510712",
     "FIELD2": "ZH9GS0"
   },
   {
     "FIELD1": "+60126494373",
     "FIELD2": "ZIFKOH"
   },
   {
     "FIELD1": "+60163363505",
     "FIELD2": "ZJWA97"
   },
   {
     "FIELD1": "+60163358178",
     "FIELD2": "ZK0AHK"
   },
   {
     "FIELD1": "+60126368693",
     "FIELD2": "ZKV8VT"
   },
   {
     "FIELD1": "+60189778905",
     "FIELD2": "ZLEWUW"
   },
   {
     "FIELD1": "+60122050726",
     "FIELD2": "ZLQQ"
   },
   {
     "FIELD1": "+60163286755",
     "FIELD2": "ZLRK7T"
   },
   {
     "FIELD1": "+60163231513",
     "FIELD2": "ZMDKEN"
   },
   {
     "FIELD1": "+60163207168",
     "FIELD2": "ZMPCC0"
   },
   {
     "FIELD1": "+60189671085",
     "FIELD2": "ZNJCAE"
   },
   {
     "FIELD1": "+60126178133",
     "FIELD2": "ZP0LXI"
   },
   {
     "FIELD1": "+60126136401",
     "FIELD2": "ZPGRZW"
   },
   {
     "FIELD1": "+60176949991",
     "FIELD2": "ZPGWDK"
   },
   {
     "FIELD1": "+60168800739",
     "FIELD2": "ZPIHB8"
   },
   {
     "FIELD1": "+60168858412",
     "FIELD2": "ZPMSX4"
   },
   {
     "FIELD1": "+60189555014",
     "FIELD2": "ZPVMW1"
   },
   {
     "FIELD1": "+60163077427",
     "FIELD2": "ZQ4WYE"
   },
   {
     "FIELD1": "+60126077133",
     "FIELD2": "ZR4BUR"
   },
   {
     "FIELD1": "+60189429438",
     "FIELD2": "ZSC9WO"
   },
   {
     "FIELD1": "+601119171311",
     "FIELD2": "ZSFRVO"
   },
   {
     "FIELD1": "+60176719233",
     "FIELD2": "ZU21WN"
   },
   {
     "FIELD1": "+60176690567",
     "FIELD2": "ZVZLBK"
   },
   {
     "FIELD1": "+60192864139",
     "FIELD2": "ZWHTUM"
   },
   {
     "FIELD1": "+60163952868",
     "FIELD2": "ZXBYRK"
   },
   {
     "FIELD1": "+60147737023",
     "FIELD2": "ZXDDCQ"
   },
   {
     "FIELD1": "+60189182909",
     "FIELD2": "ZY12P6"
   },
   {
     "FIELD1": "+60126941627",
     "FIELD2": "ZYFPML"
   },
   {
     "FIELD1": "+60126933286",
     "FIELD2": "ZYJEWG"
   },
   {
     "FIELD1": "+60126917386",
     "FIELD2": "ZYQPCN"
   },
   {
     "FIELD1": "+60163857229",
     "FIELD2": "ZZF4MK"
   },
   {
     "FIELD1": "+60168383657",
     "FIELD2": "ZZVYYY"
   }
  ];



var b = JSON.parse(JSON.stringify(a));
console.log(b);



    console.log("generate code for all user, click...")
    this.message = "Generating...";
    this.afs.collection('users').ref.get().then((value) => {
      value.forEach((v) => {

        let data = v.data() as UserInfo;
        var hash = "0";
        b.find(x=>{
          if(x.FIELD1==data.contact){
            hash =x.FIELD2; 
             console.log("field2: ", x.FIELD2);
          }
        })

        // let stringTohash = "HI7Oj1OY284i0YD2aJC1" + data.contact;
        // let hash = ShortHash.unique(stringTohash);
        let newAttendantInfo = new AttendantInfo();
        newAttendantInfo.eventDocId = "HI7Oj1OY284i0YD2aJC1";
        newAttendantInfo.userDocId = v.ref;
        newAttendantInfo.code = hash.toUpperCase();
        newAttendantInfo.checkin = false;
        newAttendantInfo.withdraw = false;
        newAttendantInfo.walkin = false;
        newAttendantInfo.claim = false;
        newAttendantInfo.checkintime = "";

        this.afs.collection('attendants').add(newAttendantInfo.getData())
          .then((r) => {
            this.message = "Done generate code for all users";
          });
      })
    })

  }

}
