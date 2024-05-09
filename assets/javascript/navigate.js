function navigateToMazowiecka() {
    // Adres Mazowieckiej 60a, Rzeszów
    var address = "Mazowiecka 60a, Rzeszów";
    
    // Link do wyszukiwania w Google Maps
    var url = "https://www.google.pl/maps/place/DAG'ART+Studio+Projektowe+Dagmara+Czado-Sk%C5%82adanowska/@50.0397727,22.0500489,17z/data=!4m15!1m8!3m7!1s0x473cfa969f85a643:0x75698116163b8af2!2sMazowiecka+60A,+35-324+Rzesz%C3%B3w!3b1!8m2!3d50.0397727!4d22.0500489!16s%2Fg%2F11c1gwf_c5!3m5!1s0x473cfbaa6bd3017f:0xa2bad3ea890c092f!8m2!3d50.0397728!4d22.0500488!16s%2Fg%2F11f28fp1cn?entry=ttu" + encodeURIComponent(address);
    
    // Otwórz nowe okno przeglądarki z mapą Google
    window.open("https://www.google.pl/maps/place/DAG'ART+Studio+Projektowe+Dagmara+Czado-Sk%C5%82adanowska/@50.0397727,22.0500489,17z/data=!4m15!1m8!3m7!1s0x473cfa969f85a643:0x75698116163b8af2!2sMazowiecka+60A,+35-324+Rzesz%C3%B3w!3b1!8m2!3d50.0397727!4d22.0500489!16s%2Fg%2F11c1gwf_c5!3m5!1s0x473cfbaa6bd3017f:0xa2bad3ea890c092f!8m2!3d50.0397728!4d22.0500488!16s%2Fg%2F11f28fp1cn?entry=ttu", "_blank");
}

// Przypisanie funkcji do przycisku po jego id
document.getElementById("navigation").addEventListener("click", navigateToMazowiecka);