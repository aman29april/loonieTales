export function getClbFromIelts(iel_listening, iel_reading,  iel_speaking, iel_writing) {

    let iel_final = "";
    if (iel_listening == "" || iel_reading == "" || iel_speaking == "" || iel_writing == "") {
        iel_final = "You must enter all Four values.";
    } else if (iel_listening <= "4.0" || iel_reading <= "3.0" || iel_speaking <= "3.5" || iel_writing <= "3.5") {
        iel_final = "3 or less";
    } else if (iel_listening <= "4.5" || iel_reading <= "3.5" || iel_speaking <= "4.5" || iel_writing <= "4.5") {
        iel_final = 4;
    } else if (iel_listening <= "5.0" || iel_reading <= "4.5" || iel_speaking <= "5.0" || iel_writing <= "5.0") {
        iel_final = 5;
    } else if (iel_listening <= "5.5" || iel_reading <= "5.5" || iel_speaking <= "5.5" || iel_writing <= "5.5") {
        iel_final = 6;
    } else if (iel_listening <= "7.0" || iel_reading <= "6.0" || iel_speaking <= "6.0" || iel_writing <= "6.0") {
        iel_final = 7;
    } else if (iel_listening <= "7.5" || iel_reading <= "6.5" || iel_speaking <= "6.5" || iel_writing <= "6.5") {
        iel_final = 8;
    } else if (iel_listening <= "8.0" || iel_reading <= "7.0" || iel_speaking <= "7.0" || iel_writing <= "7.0") {
        iel_final = 9;
    } else if (iel_listening <= "8.5" || iel_reading <= "8.0" || iel_speaking <= "7.5" || iel_writing <= "7.5") {
        iel_final = 10;
    } else if (iel_listening <= "9.0" || iel_reading <= "9.0" || iel_speaking <= "9.0" || iel_writing <= "9.0") {
        iel_final = "10+";
    }
    return iel_final;
}

export function celpipg_calculate(celpipg_listening, celpipg_reading,  celpipg_speaking, celpipg_writing) {
    let celpipg_final = "";
    if (celpipg_listening == "" || celpipg_reading == "" || celpipg_speaking == "" || celpipg_writing == "") {
        celpipg_final = "You must enter all Four values.";
    } else if (celpipg_listening == "3" || celpipg_reading == "3" || celpipg_speaking == "3" || celpipg_writing == "3") {
        celpipg_final = "Your CLB is 3 or less.";
    } else if (celpipg_listening == "4" || celpipg_reading == "4" || celpipg_speaking == "4" || celpipg_writing == "4") {
        celpipg_final = "4";
    } else if (celpipg_listening == "5" || celpipg_reading == "5" || celpipg_speaking == "5" || celpipg_writing == "5") {
        celpipg_final = "5";
    } else if (celpipg_listening == "6" || celpipg_reading == "6" || celpipg_speaking == "6" || celpipg_writing == "6") {
        celpipg_final = "6";
    } else if (celpipg_listening == "7" || celpipg_reading == "7" || celpipg_speaking == "7" || celpipg_writing == "7") {
        celpipg_final = "7";
    } else if (celpipg_listening == "8" || celpipg_reading == "8" || celpipg_speaking == "8" || celpipg_writing == "8") {
        celpipg_final = "8";
    } else if (celpipg_listening == "9" || celpipg_reading == "9" || celpipg_speaking == "9" || celpipg_writing == "9") {
        celpipg_final = "9+";
    }
    return celpipg_final
}

export function tcf_calculate(tcf_listening, tcf_reading, tcf_writing, tcf_speaking) {
    let tcf_final = "";
    if (tcf_listening == "" || tcf_reading == "" || tcf_writing == "" || tcf_speaking == "") {
        tcf_final = "Vous devez s&#xE9;lectionner les quatre valeurs.";
    } else if (tcf_listening == "330" || tcf_reading == "341" || tcf_writing == "3" || tcf_speaking == "3") {
        tcf_final = "3";
    } else if (tcf_listening == "331" || tcf_reading == "342" || tcf_writing == "4" || tcf_speaking == "4") {
        tcf_final = "4";
    } else if (tcf_listening == "369" || tcf_reading == "375" || tcf_writing == "6" || tcf_speaking == "6") {
        tcf_final = "5";
    } else if (tcf_listening == "398" || tcf_reading == "406" || tcf_writing == "7" || tcf_speaking == "7") {
        tcf_final = "6";
    } else if (tcf_listening == "458" || tcf_reading == "453" || tcf_writing == "10" || tcf_speaking == "10") {
        tcf_final = "7";
    } else if (tcf_listening == "503" || tcf_reading == "499" || tcf_writing == "12" || tcf_speaking == "12") {
        tcf_final = "8";
    } else if (tcf_listening == "523" || tcf_reading == "524" || tcf_writing == "14" || tcf_speaking == "14") {
        tcf_final = "9+";
    }
    return tcf_final
}