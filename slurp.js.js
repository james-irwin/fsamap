var callbackCount=0;
var callbackTarget=0;

var countyNames=[
'Babergh', 'Basildon', 'Bedford', 'Braintree', 'Breckland', 'Brentwood', 'Broadland', 'Broxbourne', 'Cambridge City', 'Castle Point', 'Central Bedfordshire', 'Chelmsford', 'Colchester', 'Dacorum', 'East Cambridgeshire', 'East Hertfordshire', 'Epping Forest', 'Fenland', 'Forest Heath', 'Great Yarmouth', 'Harlow', 'Hertsmere', 'Huntingdonshire', 'Ipswich', 'King&#39;s Lynn and West Norfolk', 'Luton', 'Maldon', 'Mid Suffolk', 'North Hertfordshire', 'North Norfolk', 'Norwich City', 'Peterborough City', 'Rochford', 'South Cambridgeshire', 'South Norfolk', 'Southend-On-Sea', 'St Albans City', 'St Edmundsbury', 'Stevenage', 'Suffolk Coastal', 'Tendring', 'Three Rivers', 'Thurrock', 'Uttlesford', 'Watford', 'Waveney', 'Welwyn Hatfield', 'Amber Valley', 'Ashfield', 'Bassetlaw', 'Blaby', 'Bolsover', 'Boston', 'Broxtowe', 'Charnwood', 'Chesterfield', 'Corby', 'Daventry', 'Derby City', 'Derbyshire Dales', 'East Lindsey', 'East Northamptonshire', 'Erewash', 'Gedling', 'Harborough', 'High Peak', 'Hinckley and Bosworth', 'Kettering', 'Leicester City', 'Lincoln City', 'Mansfield', 'Melton', 'Newark and Sherwood', 'North East Derbyshire', 'North Kesteven', 'North West Leicestershire', 'Northampton', 'Nottingham City', 'Oadby and Wigston', 'Rushcliffe', 'Rutland', 'South Derbyshire', 'South Holland', 'South Kesteven', 'South Northamptonshire', 'Wellingborough', 'West Lindsey', 'Barking and Dagenham', 'Barnet', 'Bexley', 'Brent', 'Bromley', 'Camden', 'City of London Corporation', 'Croydon', 'Ealing', 'Enfield', 'Greenwich', 'Hackney', 'Hammersmith and Fulham', 'Haringey', 'Harrow', 'Havering', 'Hillingdon', 'Hounslow', 'Islington', 'Kensington and Chelsea', 'Kingston-Upon-Thames', 'Lambeth', 'Lewisham', 'Merton', 'Newham', 'Redbridge', 'Richmond-Upon-Thames', 'Southwark', 'Sutton', 'Tower Hamlets', 'Waltham Forest', 'Wandsworth', 'Westminster', 'Darlington', 'Durham', 'Gateshead', 'Hartlepool', 'Middlesbrough', 'Newcastle Upon Tyne', 'North Tyneside', 'Northumberland', 'Redcar and Cleveland', 'South Tyneside', 'Stockton On Tees', 'Sunderland', 'Allerdale', 'Barrow-in-Furness', 'Blackburn', 'Blackpool', 'Bolton', 'Burnley', 'Bury', 'Carlisle City', 'Cheshire East', 'Cheshire West and Chester', 'Chorley', 'Copeland', 'Eden', 'Fylde', 'Halton', 'Hyndburn', 'Knowsley', 'Lancaster City', 'Liverpool', 'Manchester', 'Oldham', 'Pendle', 'Preston', 'Ribble Valley', 'Rochdale', 'Rossendale', 'Salford', 'Sefton', 'South Lakeland', 'South Ribble', 'St Helens', 'Stockport', 'Tameside', 'Trafford', 'Warrington', 'West Lancashire', 'Wigan', 'Wirral', 'Wyre', 'Adur', 'Arun', 'Ashford', 'Aylesbury Vale', 'Basingstoke and Deane', 'Bracknell Forest', 'Brighton and Hove', 'Canterbury City', 'Cherwell', 'Chichester', 'Chiltern', 'Crawley', 'Dartford', 'Dover', 'East Hampshire', 'Eastbourne', 'Eastleigh', 'Elmbridge', 'Epsom and Ewell', 'Fareham', 'Gosport', 'Gravesham', 'Guildford', 'Hart', 'Hastings', 'Havant', 'Horsham', 'Isle of Wight', 'Lewes', 'Maidstone', 'Medway', 'Mid Sussex', 'Milton Keynes', 'Mole Valley', 'New Forest', 'Oxford City', 'Portsmouth', 'Reading', 'Reigate and Banstead', 'Rother', 'Runnymede', 'Rushmoor', 'Sevenoaks', 'Shepway', 'Slough', 'South Buckinghamshire', 'South Oxfordshire', 'Southampton', 'Spelthorne', 'Surrey Heath', 'Swale', 'Tandridge', 'Test Valley', 'Thanet', 'Tonbridge and Malling', 'Tunbridge Wells', 'Vale of White Horse', 'Waverley', 'Wealden', 'West Berkshire', 'West Oxfordshire', 'Winchester City', 'Windsor and Maidenhead', 'Woking', 'Wokingham', 'Worthing', 'Wycombe', 'Bath and North East Somerset', 'Bournemouth', 'Bristol', 'Cheltenham', 'Christchurch', 'Cornwall', 'Cotswold', 'East Devon', 'East Dorset', 'Exeter City', 'Forest of Dean', 'Gloucester City', 'Isles of Scilly', 'Mendip', 'Mid Devon', 'North Devon', 'North Dorset', 'North Somerset', 'Plymouth City', 'Poole', 'Purbeck', 'Sedgemoor', 'South Gloucestershire', 'South Hams', 'South Somerset', 'Stroud', 'Swindon', 'Taunton Deane', 'Teignbridge', 'Tewkesbury', 'Torbay', 'Torridge', 'West Devon', 'West Dorset', 'West Somerset', 'Weymouth and Portland', 'Wiltshire', 'Birmingham', 'Bromsgrove', 'Cannock Chase', 'Coventry', 'Dudley', 'East Staffordshire', 'Herefordshire', 'Lichfield', 'Malvern Hills', 'Newcastle-Under-Lyme', 'North Warwickshire', 'Nuneaton and Bedworth', 'Redditch', 'Rugby', 'Sandwell', 'Shropshire', 'Solihull', 'South Staffordshire', 'Stafford', 'Staffordshire Moorlands', 'Stoke-On-Trent', 'Stratford-on-Avon', 'Tamworth', 'Telford and Wrekin Council', 'Walsall', 'Warwick', 'Wolverhampton', 'Worcester City', 'Wychavon', 'Wyre Forest', 'Barnsley', 'Bradford', 'Calderdale', 'Craven', 'Doncaster', 'East Riding of Yorkshire', 'Hambleton', 'Harrogate', 'Hull City', 'Kirklees', 'Leeds', 'North East Lincolnshire', 'North Lincolnshire', 'Richmondshire', 'Rotherham', 'Ryedale', 'Scarborough', 'Selby', 'Sheffield', 'Wakefield', 'York', 'Antrim', 'Ards', 'Armagh', 'Ballymena', 'Ballymoney', 'Banbridge', 'Belfast', 'Carrickfergus', 'Castlereagh', 'Coleraine', 'Cookstown', 'Craigavon', 'Derry', 'Down', 'Dungannon', 'Fermanagh', 'Larne', 'Limavady', 'Lisburn', 'Magherafelt', 'Moyle', 'Newry and Mourne', 'Newtownabbey', 'North Down', 'Omagh', 'Strabane', 'Aberdeen City', 'Aberdeenshire', 'Angus', 'Argyll and Bute', 'Clackmannanshire', 'Comhairle nan Eilean Siar (Western Isles)', 'Dumfries and Galloway', 'Dundee City', 'East Ayrshire', 'East Dunbartonshire', 'East Lothian', 'East Renfrewshire', 'Edinburgh (City of)', 'Falkirk', 'Fife', 'Glasgow City', 'Highland', 'Inverclyde', 'Midlothian', 'Moray', 'North Ayrshire', 'North Lanarkshire', 'Orkney Islands', 'Perth and Kinross', 'Renfrewshire', 'Scottish Borders', 'Shetland Islands', 'South Ayrshire', 'South Lanarkshire', 'Stirling', 'West Dunbartonshire', 'West Lothian', 'Anglesey', 'Blaenau Gwent', 'Bridgend', 'Caerphilly', 'Cardiff', 'Carmarthenshire', 'Ceredigion', 'Conwy', 'Denbighshire', 'Flintshire', 'Gwynedd', 'Merthyr Tydfil', 'Monmouthshire', 'Neath Port Talbot', 'Newport', 'Pembrokeshire', 'Powys', 'Rhondda Cynon Taf', 'Swansea', 'Torfaen', 'Vale of Glamorgan', 'Wrexham'
];

var fs = require('fs');

function replaceAll(find, replace, str) {
    var mystr=String(str);
    return mystr.replace(new RegExp(find, 'g'), replace);
}

var starRatings=['*','**','***','****','*****'];

function checkComplete()
{
    callbackCount++;
    //console.log('//cback count at '+callbackCount+'/'+callbackTarget);
    if (callbackTarget==callbackCount)
        emitFooter();
    //else
        //console.log('Not yet!!!');
}

// Emit all pins for the county
function allpins(err, data) {
if (err) throw err;
var result=JSON.parse(data);
    var places = result['FHRSEstablishment']['EstablishmentCollection'][0]['EstablishmentDetail'];

    var pinNumber=0;
    for (var i=0;i<places.length;i++){
    //for (var i = 0; i < 20; i++) {
        // Skip places without rating values

        if (!((places[i].RatingValue=='1') ||
              (places[i].RatingValue=='2') ||
              (places[i].RatingValue=='3') ||
              (places[i].RatingValue=='4') ||
              (places[i].RatingValue=='5'))
           )
            continue;

        // Skip non-located pins
        if ((typeof places[i].Geocode[0]['Latitude'] == 'undefined') ||
           (typeof places[i].Geocode[0]['Longitude'] == 'undefined'))
            continue;

        console.log('m[' + pinNumber + ']=new google.maps.Marker({\
                    position:new google.maps.LatLng(' +
                    places[i].Geocode[0]['Latitude'] +
                    ',' +
                    places[i].Geocode[0]['Longitude'] +
                    '),');
        //console.log('::'+(places[i].RatingValue-1)+'::');
        console.log('title:\''+replaceAll("'","",
                    places[i].BusinessName)+
                    ' ('+
                    starRatings[(places[i].RatingValue-1)]+
                    ')\',icon:icons['+(places[i].RatingValue-1)+
                    ']});m['+pinNumber+'].setMap(map);');
        console.log('iW['+pinNumber+']=new \
                    google.maps.InfoWindow({content:\''+
                    // Name and rating
                    replaceAll("'","",
                        places[i].BusinessName)+
                    ' ('+
                    starRatings[(places[i].RatingValue-1)]+
                    ')<br>'+
                    places[i].RatingDate+
                    '\'});');
        console.log('google.maps.event.addListener(m['+pinNumber+'],\
                    \'click\', function() {\
                    iW['+pinNumber+
                    '].open(map,m['+pinNumber+']);});');
        pinNumber++;
        }
    // Pan to the first item in the county set
    // Now that we're only emitting pins with locations, we can do this -- assuming there is at least one pin.
    console.log('map.panTo(m[0].position);');

    checkComplete(); // Synchronise after the function that processes
                    // the xml data completes. Outside this block
                    // could be run before (callbacks and all the 
                    // async jazz).
}

function emitHeader() {
console.log('<!DOCTYPE html>');
console.log('<html><head><script src="http://maps.googleapis.com/maps/api/js"></script>');;

console.log('<script> \
            function initialize() \
            { \
            var mapProp = { \
            center:new google.maps.LatLng(54.975,-1.617532),');
console.log('zoom:12, mapTypeId:google.maps.MapTypeId.ROADMAP};');

console.log('var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);');

console.log('var m=[];'); // Short output for marker
console.log('var jm=[];'); // Short output for jumpmarker
console.log('var iW=[];'); // Short output for infoWindow
console.log('var jiW=[];'); // Short ouput for jumpinfoWindow

    // Use short names in target output
    console.log('var icons=[\
        \'http://maps.google.com/mapfiles/kml/pal3/icon39.png\',\
        \'http://maps.google.com/mapfiles/kml/pal3/icon33.png\',\
        \'http://maps.google.com/mapfiles/kml/pal3/icon41.png\',\
        \'http://maps.google.com/mapfiles/kml/pal2/icon32.png\',\
        \'http://maps.google.com/mapfiles/kml/pal4/icon39.png\'\
        ];');

    console.log('var countyIcon =\
        \'http://maps.google.com/mapfiles/kml/pal3/icon60.png\';');

}

function emitFooter() {
console.log('}'); // End of initialise function
console.log('google.maps.event.addDomListener(window,\
                        \'load\', initialize);');
console.log('</script>');
console.log('</head><body><div id="googleMap" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0;"></div></body></html>');
}

function doallpins(filename, id){
    var data = fs.readFile(filename, allpins);
}

function dosinglepin(filename, id){
if (id==80) {checkComplete(); return;} // Skip 80 -- it's bad.

    //checkComplete(); return; // Skip while debugging

    var data = fs.readFile(filename,
            // Singlepin emitting function
            // with id for the marker name
           function /*singlepin*/(err, data) {
    if (err) {console.error('ERROR w/file:'+id); throw err;}
    //console.log('Calculate mean pin location for data.');

    var result = JSON.parse(data);

    var totallat=0.0;
    var totallong=0.0;
    var meanlat=0.0;
    var meanlong=0.0;
    var pointsConsidered=0;

    var places = result['FHRSEstablishment']['EstablishmentCollection'][0]['EstablishmentDetail'];

        // JAMES THERE IS NO NEED TO DO THE MEAN
        // OF ALL LOCATIONS! JUST TAKE THE FIRST DOZEN OR SO!

    for (var i=0;i<(places.length<30?places.length:30);i++){
        if (!isNaN(places[i].Geocode[0]['Latitude']) &&
           !isNaN(places[i].Geocode[0]['Longitude']))
        {
            // 1* to coerce type to a number so that +
            // means addition, not string concatenation (sigh)
            totallat=totallat+(1*places[i].Geocode[0]['Latitude']) ;
            totallong=totallong+(1*places[i].Geocode[0]['Longitude']) ;
            pointsConsidered++;
        }
    }
    //console.log('Points considered='+pointsConsidered);
    //console.log('Lattot='+totallat+', Longtot='+totallong);
    meanlat=totallat/pointsConsidered;
    meanlong=totallong/pointsConsidered;

    //console.log('marker:'+id+' Lat:'+meanlat+' Lon:'+meanlong);

    console.log('jm[' + id + ']=new google.maps.Marker({\
                position:new google.maps.LatLng(' +
                meanlat+', '+meanlong+
                '),');
        console.log('title:\''+replaceAll("'","",
                    countyNames[id])+
                    '\',icon:countyIcon'+
                    '});jm['+id+'].setMap(map);');
        console.log('jiW['+id+']=new \
                    google.maps.InfoWindow({\
                    content:\'<a href="fsa'+
                    (id)+'.html">'+countyNames[id]+'</a><br>'+
                    places.length+' inspections\'});');
    console.log('google.maps.event.addListener(jm['+id+'],\
                    \'click\', function() {\
                    jiW['+id+
                    '].open(map,jm['+id+']);});');
    checkComplete();
    }); // fs.readfile
}

function emitBody(){
    var emitCounty=countyNames.length+1; // Default is to not emit a county's pins
    if (process.argv.length>2)
        emitCounty=process.argv[2];

    //console.log('Emitting county '+emitCounty);

    callbackTarget=countyNames.length;

    for (var countyNum=0; countyNum<callbackTarget; countyNum++)
    {
    var filename='jsfiles/'+(countyNum+1);
    // If this is the county being plotted, call a differetn function
    // Other wise just put a pin in the mean lat-long position
    // with a link to the county page.
    //console.log('//Processing county '+countyNames[countyNum]);

    // If this is the last county file to process, use a shim that
    // will emit the pin(s) and the footer
    if (emitCounty==countyNum)
        doallpins(filename, countyNum);
    else
        dosinglepin(filename, countyNum);
    }
}

// Emit the header for the whole map
emitHeader();
emitBody();
// Emit the footer for the whole map
// Note -- bad synchronsisation here -- need to emit the footer
//emitFooter(); // Now sync at the end of the allpins/singlepins function with callbackcount and callbacktarget!