import { Card, Typography } from "@material-tailwind/react";
import { useState } from "react";
 
const TABLE_HEAD = ["StoreNo", "Brand", "Manager", "Contact"];
 
const LGF = [
    {
        StoreNo: "01A",
        Brand: "Senco Gold & Diamonds",
        Manager: "Pintu",
        Contact: "9800880147"
    },
    {
        StoreNo: "01",
        Brand: "Mr. Gusbindar Singh - Burman Brothers",
        Manager: "Sheikh Khurshid",
        Contact: "9732050762"
    },
    {
        StoreNo: "02+03",
        Brand: "Spencer's",
        Manager: "Amit Shaw",
        Contact: "7679444566"
    },
    {
        StoreNo: "06",
        Brand: "Video Plaza",
        Manager: "Barun Sahu",
        Contact: "2544130 / 9749152617 / 9932119264"
    },
    {
        StoreNo: "06A",
        Brand: "The Sizzling Glass",
        Manager: "Arindam dey",
        Contact: "9609501106"
    },
    {
        StoreNo: "07",
        Brand: "Mc Donald",
        Manager: "Nirupam Sethi",
        Contact: "8697748556"
    },
    {
        StoreNo: "08",
        Brand: "Reliance Foot Prints",
        Manager: "Radha Kant Sikdar",
        Contact: "0343-2542454 / 9903948150"
    },
    {
        StoreNo: "09",
        Brand: "Bata India Ltd",
        Manager: "Kuhu Achari",
        Contact: "8918407902"
    },
    {
        StoreNo: "10",
        Brand: "MPJ Jewellers",
        Manager: "Pallab Ghosh",
        Contact: "9609090521"
    },
    {
        StoreNo: "11",
        Brand: "Reliance Trends MAN",
        Manager: "Amit Kar",
        Contact: "9564655557"
    },
    {
        StoreNo: "12",
        Brand: "Raymonds",
        Manager: "Satwant Haralaka",
        Contact: "8972039296"
    },
    {
        StoreNo: "13",
        Brand: "Raymonds Home",
        Manager: "Satman Haralaka",
        Contact: "0343-2542138"
    },
    {
        StoreNo: "14+15",
        Brand: "Habib's Hair & Beauty",
        Manager: "Arijit Bagdi",
        Contact: "6294448476"
    },
    {
        StoreNo: "16",
        Brand: "Jawed Habib",
        Manager: "Bappa Kahar",
        Contact: "7908276787"
    },
    {
        StoreNo: "17",
        Brand: "KFC",
        Manager: "Debashish Dutta",
        Contact: "7001874910"
    },
    {
        StoreNo: "17B",
        Brand: "Pizza Hut",
        Manager: "Koushik Bisswas",
        Contact: "9609678166"
    },
    {
        StoreNo: "19A",
        Brand: "One Bite",
        Manager: "Sovik Saha",
        Contact: "8927926963"
    },
    {
        StoreNo: "19A",
        Brand: "Chicago Pizza",
        Manager: "Santanu",
        Contact: "7908529583"
    },
    
    
];

const UGF=[
    {
        StoreNo: "01+101+201",
        Brand: "Shoppers Stop",
        Manager: "Joydeep Chakraborty",
        Contact: "03436606666"
    },
    {
        StoreNo: "02+102+202",
        Brand: "Pantaloons",
        Manager: "Avijit Das",
        Contact: "8479905170"
    },
    {
        StoreNo: "03A",
        Brand: "Himalaya Opticals",
        Manager: "Arindam",
        Contact: "09147179286"
    },
    {
        StoreNo: "03B",
        Brand: "Helios",
        Manager: "Ruchika Gargi",
        Contact: "7319580095"
    },
    {
        StoreNo: "04",
        Brand: "iTech",
        Manager: "Rahul",
        Contact: "7044059769"
    },
    {
        StoreNo: "05",
        Brand: "One Plus",
        Manager: "Prasikh",
        Contact: "7001999980"
    },
    {
        StoreNo: "06+07",
        Brand: "Cobb Fashion",
        Manager: "Chanchal Banerjee",
        Contact: "9832761646"
    },
    {
        StoreNo: "08",
        Brand: "Crocs",
        Manager: "Surojit Paul",
        Contact: "8250060680"
    },
    {
        StoreNo: "09",
        Brand: "Lenskart",
        Manager: "Riju Das",
        Contact: "9563813246"
    },
    {
        StoreNo: "10",
        Brand: "Woodland",
        Manager: "Manish Kumar",
        Contact: "2542444 / 9504837278"
    },
    {
        StoreNo: "11",
        Brand: "Fab India",
        Manager: "Saroj Kr. Singh",
        Contact: "2542695 / 2542702 / 7029423147"
    },
    {
        StoreNo: "12",
        Brand: "The Body Shop",
        Manager: "Ranjit Tiwari",
        Contact: "8536025640"
    },
    {
        StoreNo: "13",
        Brand: "Puma",
        Manager: "Samiran Adhikary",
        Contact: "0343-2549851 / 7584876857"
    },
    {
        StoreNo: "14",
        Brand: "Addidas",
        Manager: "Badsha Mondal",
        Contact: "6292294559"
    },{
        StoreNo: "15",
        Brand: "Allen Solly",
        Manager: "Santi Das",
        Contact: "9614107378"
    },
    {
        StoreNo: "16",
        Brand: "Indian Terrain",
        Manager: "Biswajit Samadder",
        Contact: "9641469724"
    },
    {
        StoreNo: "17",
        Brand: "Black Berry",
        Manager: "Sandeep Chakraborty",
        Contact: "0343-2548161 / 8768578082"
    },
    {
        StoreNo: "18",
        Brand: "Veomoda and Jack & Jones",
        Manager: "Pawan Paswan",
        Contact: "7001013037"
    },
    {
        StoreNo: "19",
        Brand: "GKB Lens",
        Manager: "Maharishi Bhattacharjee",
        Contact: "8763935243"
    },
    {
        StoreNo: "20",
        Brand: "Shyam Sunder Chandiwala",
        Manager: "Harsh Todi",
        Contact: "8653907479"
    },
    {
        StoreNo: "21",
        Brand: "Samsung",
        Manager: "Jitendar Prasad Shaw",
        Contact: "9732108888"
    },
    {
        StoreNo: "22",
        Brand: "US POLO",
        Manager: "Sunny Laal",
        Contact: "3432542939"
    },
    {
        StoreNo: "23",
        Brand: "Sketchers",
        Manager: "Sekh Faim",
        Contact: "9123787406"
    },
    {
        StoreNo: "24",
        Brand: "Van Heusan",
        Manager: "Kamlesh Yadav",
        Contact: "2542044 / 9434894815"
    },
    {
        StoreNo: "25",
        Brand: "Louis Phillips",
        Manager: "Ratan Barnwal",
        Contact: "9883960003 / 0343-2542338"
    },
    {
        StoreNo: "26",
        Brand: "Wildcraft",
        Manager: "Amit",
        Contact: "2544786 / 9093976762"
    },
    {
        StoreNo: "27",
        Brand: "Reebok",
        Manager: "Chandan Lohar",
        Contact: "8293180673"
    },
    
    

];

const first_floor=[{
    StoreNo: "103A+103B+104",
    Brand: "Reliance Trands Womens",
    Manager: "Shantanu Paul",
    Contact: "9851548831"
},
{
    StoreNo: "105",
    Brand: "Q - Women's Pride",
    Manager: "Shubhankar Bose",
    Contact: "9932245417 / 7601904225"
},
{
    StoreNo: "106+107",
    Brand: "Van Heusen Intimate",
    Manager: "Kajal Gupta",
    Contact: "8597154126"
},
{
    StoreNo: "108",
    Brand: "Lavie",
    Manager: "Krishna",
    Contact: "8597154126"
},
{
    StoreNo: "109",
    Brand: "Presto",
    Manager: "Sumon Chakraborty",
    Contact: "9147173323"
},
{
    StoreNo: "110",
    Brand: "Roshnai",
    Manager: "Jaya Choudhuri",
    Contact: "7001771618"
},
{
    StoreNo: "111",
    Brand: "Cott Counter",
    Manager: "Subhasis",
    Contact: "8906362245"
},
{
    StoreNo: "112",
    Brand: "Go Colors",
    Manager: "Santu Goswami",
    Contact: "0343-3299255 / 6296970055"
},
{
    StoreNo: "113",
    Brand: "Ethnicity",
    Manager: "Subir",
    Contact: "8250645964"
},
{
    StoreNo: "114",
    Brand: "Samsonite",
    Manager: "Saheb Ghosh",
    Contact: "8338862422"
},
{
    StoreNo: "115",
    Brand: "Manish",
    Manager: "Koushik / Mithun / Rahul / Utpal",
    Contact: "9732265749"
},
{
    StoreNo: "116",
    Brand: "Killer",
    Manager: "Sripada Dutta Banik",
    Contact: "9851038068"
},
{
    StoreNo: "117",
    Brand: "Lee",
    Manager: "Ayan Ghosh",
    Contact: "9635694929"
},
{
    StoreNo: "118",
    Brand: "Pepe",
    Manager: "Surjo",
    Contact: "9614529796"
},
{
    StoreNo: "119",
    Brand: "Mufti",
    Manager: "Indrajit Lama",
    Contact: "2542757 / 8167544561"
},
{
    StoreNo: "120",
    Brand: "M&W",
    Manager: "Animesh Banerjee",
    Contact: "2543446 / 9563783781"
},
{
    StoreNo: "121",
    Brand: "Style Up",
    Manager: "Avinash Kumar",
    Contact: "9674459088 / 8240680318"
},
{
    StoreNo: "122",
    Brand: "Turtle",
    Manager: "Sumit Nath",
    Contact: "7811900677 / 9933101444"
},
{
    StoreNo: "123",
    Brand: "Monte Carlo",
    Manager: "Biswajit Samdder",
    Contact: "9641469724"
},
{
    StoreNo: "124",
    Brand: "Spyker",
    Manager: "Hemanta Narayan Deb",
    Contact: "8250583091 / 7908063624"
},
{
    StoreNo: "125",
    Brand: "VIP Bags",
    Manager: "Arijit Ghoshal",
    Contact: "03432542556"
},
{
    StoreNo: "126",
    Brand: "Success",
    Manager: "Uttam Orang",
    Contact: "2542406 / 9830021442"
},
{
    StoreNo: "127",
    Brand: "Jocky",
    Manager: "Alok Ghosh",
    Contact: "9064397317"
},
{
    StoreNo: "128",
    Brand: "Manyavar",
    Manager: "Subhasis Das",
    Contact: "03432542189"
},
{
    StoreNo: "129",
    Brand: "Sabhyata",
    Manager: "Debashish",
    Contact: "7001522550"
},

];

const second_floor=[{
    StoreNo: "203+204+205+206+207",
    Brand: "Being Iban Pvt Ltd",
    Manager: "Bijay Sahni",
    Contact: "9073387203"
},
{
    StoreNo: "208",
    Brand: "Akshara (Mobile Shop)",
    Manager: "Somnath",
    Contact: "7001466090"
},
{
    StoreNo: "209",
    Brand: "Baba Telecom",
    Manager: "Shambhu Nath Tiwari",
    Contact: "9832124777"
},
{
    StoreNo: "210",
    Brand: "The Ice Berg",
    Manager: "Rishab",
    Contact: "7477713336"
},
{
    StoreNo: "211",
    Brand: "Shree Telecom",
    Manager: "Pradeep Singh",
    Contact: "7797778888"
},
{
    StoreNo: "212",
    Brand: "Hoffmen",
    Manager: "Avik Banerjee / Santosh Chatterjee",
    Contact: "2542785"
},
{
    StoreNo: "213",
    Brand: "Signature Salon",
    Manager: "Suman Chatterjee",
    Contact: "2542999"
},
{
    StoreNo: "214",
    Brand: "Rare Planet",
    Manager: "Argha",
    Contact: "9123967310"
},
{
    StoreNo: "215+216",
    Brand: "Mumuso",
    Manager: "Biswajit Doloi",
    Contact: "7478055122"
},
{
    StoreNo: "217+218",
    Brand: "Toy 2 Gift",
    Manager: "Baishakhi Sen / Dip Mukherjee",
    Contact: "03432548483 / 8927087892"
},
{
    StoreNo: "219+220",
    Brand: "Reliance Trends Junior",
    Manager: "Debjit Narayan",
    Contact: "9535207296 / 7975854337 / 9835207296"
},
{
    StoreNo: "221",
    Brand: "Style Up",
    Manager: "Avinash",
    Contact: " "
},
{
    StoreNo: "222",
    Brand: "Ajanta",
    Manager: " ",
    Contact: " "
},
{
    StoreNo: "223",
    Brand: "Gini Jony",
    Manager: "Baishakhi Sen",
    Contact: "03432548483 / 8927087892"
},
{
    StoreNo: "224",
    Brand: "Mi Studio",
    Manager: "Tamal Chatterjee",
    Contact: "9932227792"
},
{
    StoreNo: "225",
    Brand: "Me And Mom",
    Manager: "Baishakhi Sen",
    Contact: "03432548483 / 8927087892"
},
{
    StoreNo: "226",
    Brand: "Campus",
    Manager: "",
    Contact: ""
},
{
    StoreNo: "227",
    Brand: "Moustache Jeans",
    Manager: "Sanjib Kumar Yadav",
    Contact: "9614496166"
},
{
    StoreNo: "228",
    Brand: "Oppo",
    Manager: "Deep Rakshit",
    Contact: "7318939699"
},
{
    StoreNo: "229",
    Brand: "Vivo",
    Manager: "Kumarjit",
    Contact: "7908298923"
},];

const third_floor=[{
    StoreNo: "301A+306+307+308",
    Brand: "Bazaar Kolkata",
    Manager: "Supriyo",
    Contact: "9732386981"
},
{
    StoreNo: "302+303",
    Brand: "Parashmony Health Care - Health World",
    Manager: "Ms. Subhra Chakraborty",
    Contact: "8170052879"
},
{
    StoreNo: "304",
    Brand: "Head Tunners",
    Manager: "Subir Paul",
    Contact: "2543017 / 9331829070"
},
{
    StoreNo: "304A",
    Brand: "Ooz Café",
    Manager: "Ravi Prasad",
    Contact: "9474122391 / 9851002786"
},
{
    StoreNo: "305",
    Brand: "CCD",
    Manager: "Achinta Bauri",
    Contact: "8436934200"
},
{
    StoreNo: "307+308",
    Brand: "Junction Game Zone",
    Manager: "Shuvam Gupta",
    Contact: " "
},
{
    StoreNo: "309",
    Brand: "Burger Singh",
    Manager: "Pintu Adhikary",
    Contact: "9851977867"
},
{
    StoreNo: "310",
    Brand: "Pizza Love",
    Manager: "Somnath",
    Contact: "8401671068"
},
{
    StoreNo: "311A",
    Brand: "Jus Jumpin",
    Manager: "Manisha",
    Contact: "8420050495"
},
{
    StoreNo: "313+314+315",
    Brand: "First Cry",
    Manager: "Anindita Roy / Soumen Sharma",
    Contact: "8918994993"
},
{
    StoreNo: "316",
    Brand: "Anuj Enterprise - Parivaar",
    Manager: "Rajiv Haralaka",
    Contact: "9932119264"
},
{
    StoreNo: "Food Court",
    Brand: "Wow Momo",
    Manager: "Pallab Kundu",
    Contact: "8637564866"
},
{
    StoreNo: "Food Court",
    Brand: "Tokri",
    Manager: "Ravi Kant Prasad",
    Contact: "9851002786"
},
{
    StoreNo: "Food Court",
    Brand: "The Belgian Waffle",
    Manager: "Raj Chakraborty",
    Contact: "7478587687"
},{
    StoreNo: "Food Court",
    Brand: "# Momo",
    Manager: "Ravi Kant Prashad",
    Contact: "9474122391"
},
{
    StoreNo: "Food Court",
    Brand: "Lip Slip",
    Manager: "Choto Roy",
    Contact: "8597296209"
},
{
    StoreNo: "Food Court",
    Brand: "Cooc Doo Coo",
    Manager: "Choto Roy",
    Contact: "8597296209"
},
{
    StoreNo: "Food Court",
    Brand: "Dhosa Junction/Chat Junction/The Mongolian",
    Manager: "Monoj Gupta",
    Contact: "9831221851"
},
{
    StoreNo: "Food Court",
    Brand: "The London Shake",
    Manager: "Debashis Sen",
    Contact: "9609600808"
},
{
    StoreNo: "Food Court",
    Brand: "Soul Touch",
    Manager: "Ravi Prashad",
    Contact: "9474122391"
},
{
    StoreNo: "Food Court",
    Brand: "Subway Systems",
    Manager: "Ritesh Kumar",
    Contact: "7277056087"
},
{
    StoreNo: "Food Court",
    Brand: "Wow Chicken",
    Manager: "Biswajit",
    Contact: "9147310879"
},
{
    StoreNo: "Food Court",
    Brand: "Liiti Choka",
    Manager: "",
    Contact: ""
},
{
    StoreNo: "Junction Game Zone",
    Brand: "",
    Manager: "Baren Bagdi",
    Contact: "8017521217"
},

];

const fourth_floor=[{
    StoreNo: "401",
    Brand: "Bioscope Multiplex",
    Manager: "Jaharuddin Sheikh",
    Contact: "8170061203 / 9051031043"
},
{
    StoreNo: "402A",
    Brand: "Asian Paints",
    Manager: "Mohammad Haque",
    Contact: "8981089272"
},
{
    StoreNo: "402B+403",
    Brand: "Mahek-e-Punjab",
    Manager: "Goutam Mal",
    Contact: "2547000 / 9083899414 / 9836653026"
},
{
    StoreNo: "404A",
    Brand: "The Backyards",
    Manager: "Abhay Verma / Sital",
    Contact: "7076786937"
},
{
    StoreNo: "405A",
    Brand: "Cocktail - Lounge & Bar",
    Manager: "Jitendra Kumar",
    Contact: "9144422209"
},
];




  
let map=new Map();
map.set("LGF",LGF)
map.set("UGF",UGF)
map.set("1st FLOOR",first_floor)
map.set("2nd FLOOR",second_floor)
map.set("3rd FLOOR",third_floor)
map.set("4th FLOOR",fourth_floor)


 
export function Directory() {
    const [activeTab, setActiveTab] = useState("LGF");
    

let  o={
"LGF":LGF,
"UGF":UGF,
"1st FLOOR":first_floor,
"2nd FLOOR":second_floor,
"3rd FLOOR":third_floor,
"4th FLOOR":fourth_floor,
};





    return (
      <>
        <div style={{ marginTop: '2%', }}>
          <div className="w-full">
            <div className="relative right-0">
              <ul
                className="relative flex flex-wrap p-1 list-none rounded-lg bg-blue-gray-50/60"
                data-tabs="tabs"
                role="list"
              >
                {["LGF", "UGF", "1st FLOOR", "2nd FLOOR", "3rd FLOOR","4th FLOOR"].map((tab) => (
                  <li key={tab} className="z-40 flex-auto text-center">
                    <a
                      className={`z-40 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 ${
                        activeTab === tab ? "bg-white" : "bg-inherit"
                      }`}
                      role="tab"
                      aria-selected={activeTab === tab}
                      onClick={() => setActiveTab(tab)}
                    >
                      <span className="ml-1">{tab}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
  
        <div style={{ marginTop: '4%' }}>
        <Card className="h-full w-full overflow-scroll">
  <table className="w-full min-w-max table-auto text-left">
    <thead>
      <tr>
        {TABLE_HEAD.map((head) => (
          <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal leading-none opacity-70"
            >
              {head}
            </Typography>
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {
        console.log("Rendering tab:", activeTab, map.get(activeTab))
      }
      {map.get(activeTab).map(({ StoreNo, Brand, Manager, Contact }, index) => (
        <tr key={`${StoreNo}-${index}`} className="even:bg-blue-gray-50/50">
          <td className="p-4">
            <Typography variant="small" color="blue-gray" className="font-normal">
              {StoreNo}
            </Typography>
          </td>
          <td className="p-4">
            <Typography variant="small" color="blue-gray" className="font-normal">
              {Brand}
            </Typography>
          </td>
          <td className="p-4">
            <Typography variant="small" color="blue-gray" className="font-normal">
              {Manager}
            </Typography>
          </td>
          <td className="p-4">
            <Typography variant="small" color="blue-gray" className="font-normal">
              {Contact}
            </Typography>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</Card>

        </div>
      </>
    );
  }