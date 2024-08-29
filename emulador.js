const autos = {
    "Honda Civic Si 2009": { hp: 197, torque: 174 },
    "Audi S3 2012": { hp: 265, torque: 350 },
    "Volkswagen Vento 2012": { hp: 200, torque: 280 },
    "Renault Megane RS 2016": { hp: 275, torque: 360 },
    "Peugeot 207 GTi 2012": { hp: 175, torque: 240 },
    "Ford Focus 2016": { hp: 160, torque: 250 },
    "Chevrolet Cruze RS 2020": { hp: 153, torque: 240 },
    "BMW 240i 2019": { hp: 335, torque: 500 },
    "Mercedes Benz CLA250 2017": { hp: 208, torque: 350 }
};

const modificacionesPorAuto = {
    "Honda Civic Si 2009": {
        turbo: {
            marcas: {
                "Garrett GT3076R": { hp: 100, torque: 120, precio: 220000 },
                "Precision 6266": { hp: 150, torque: 180, precio: 280000 }
            }
        },
        escape: {
            marcas: {
                "HKS Hi-Power": { hp: 10, torque: 12, precio: 85000 },
                "Greddy Evolution GT": { hp: 12, torque: 15, precio: 90000 }
            }
        },
        reprogramacion: {
            marcas: {
                "Hondata FlashPro": { hp: 30, torque: 35, precio: 100000 },
                "K-Tuner V2": { hp: 25, torque: 30, precio: 95000 }
            }
        },
        frenos: {
            marcas: {
                "Brembo GT": { hp: 0, torque: 0, precio: 120000 },
                "Wilwood Dynapro": { hp: 0, torque: 0, precio: 110000 }
            }
        },
        llantas: {
            marcas: {
                "Enkei RPF1": { hp: 0, torque: 0, precio: 60000 },
                "Volk TE37": { hp: 0, torque: 0, precio: 80000 }
            }
        },
        neumaticos: {
            marcas: {
                "Michelin Pilot Sport 4S": { hp: 0, torque: 0, precio: 70000 },
                "Pirelli P Zero": { hp: 0, torque: 0, precio: 75000 }
            }
        },
        suspension: {
            marcas: {
                "Tein Street Advance Z": { hp: 0, torque: 0, precio: 100000 },
                "KW Variant 3": { hp: 0, torque: 0, precio: 150000 }
            }
        },
        bodykit: {
            marcas: {
                "Mugen Body Kit": { hp: 0, torque: 0, precio: 120000 },
                "Rocket Bunny Kit": { hp: 0, torque: 0, precio: 140000 }
            }
        },
        sistemasEnfriamiento: {
            radiador: {
                marcas: {
                    "Mishimoto Radiator": { hp: 0, torque: 0, precio: 90000 },
                }
            },
            intercooler: {
                marcas: {
                    "Greddy Intercooler": { hp: 20, torque: 25, precio: 130000 },
                }
            },
            oilCooler: {
                marcas: {
                    "HKS Oil Cooler": { hp: 0, torque: 0, precio: 70000 },
                }
            }
        },
        transmision: {
            marcas: {
                "ACT Heavy Duty Clutch Kit": { hp: 0, torque: 0, precio: 95000 },
                "Exedy Twin Disc Clutch": { hp: 0, torque: 0, precio: 120000 }
            }
        }
    },
    "Audi S3 2012": {
        turbo: {
            marcas: {
                "APR Stage 3+": { hp: 150, torque: 200, precio: 320000 },
                "Revo Turbo Kit": { hp: 140, torque: 190, precio: 310000 }
            }
        },
        escape: {
            marcas: {
                "Milltek Sport": { hp: 15, torque: 18, precio: 120000 },
                "Scorpion Exhausts": { hp: 18, torque: 20, precio: 130000 }
            }
        },
        reprogramacion: {
            marcas: {
                "APR Stage 2": { hp: 50, torque: 60, precio: 140000 },
                "Revo Stage 2": { hp: 48, torque: 58, precio: 135000 }
            }
        },
        frenos: {
            marcas: {
                "Brembo GT": { hp: 0, torque: 0, precio: 150000 },
                "AP Racing Radi-Cal": { hp: 0, torque: 0, precio: 160000 }
            }
        },
        llantas: {
            marcas: {
                "OZ Racing Ultraleggera": { hp: 0, torque: 0, precio: 85000 },
                "BBS CH-R": { hp: 0, torque: 0, precio: 100000 }
            }
        },
        neumaticos: {
            marcas: {
                "Continental ContiSportContact 6": { hp: 0, torque: 0, precio: 80000 },
                "Michelin Pilot Sport Cup 2": { hp: 0, torque: 0, precio: 95000 }
            }
        },
        suspension: {
            marcas: {
                "Bilstein B16 PSS10": { hp: 0, torque: 0, precio: 170000 },
                "KW Clubsport": { hp: 0, torque: 0, precio: 180000 }
            }
        },
        bodykit: {
            marcas: {
                "ABT Aero Kit": { hp: 0, torque: 0, precio: 160000 },
                "Vorsteiner VRS Kit": { hp: 0, torque: 0, precio: 170000 }
            }
        },
        sistemasEnfriamiento: {
            radiador: {
                marcas: {
                    "CSF Racing Radiator": { hp: 0, torque: 0, precio: 100000 },
                }
            },
            intercooler: {
                marcas: {
                    "Wagner Tuning Intercooler": { hp: 20, torque: 30, precio: 150000 },
                }
            },
            oilCooler: {
                marcas: {
                    "Setrab Oil Cooler": { hp: 0, torque: 0, precio: 80000 },
                }
            }
        },
        transmision: {
            marcas: {
                "Sachs Performance Clutch Kit": { hp: 0, torque: 0, precio: 130000 },
                "HPA DSG Upgrade": { hp: 0, torque: 0, precio: 150000 }
            }
        }
    },
    "Volkswagen Vento 2012": {
        turbo: {
            marcas: {
                "CTS Turbo Kit": { hp: 120, torque: 160, precio: 290000 },
                "APR Stage 3": { hp: 130, torque: 170, precio: 310000 }
            }
        },
        escape: {
            marcas: {
                "Borla Cat-Back": { hp: 10, torque: 15, precio: 95000 },
                "MagnaFlow": { hp: 12, torque: 17, precio: 98000 }
            }
        },
        reprogramacion: {
            marcas: {
                "Unitronic Stage 2": { hp: 40, torque: 50, precio: 120000 },
                "GIAC Stage 2": { hp: 42, torque: 52, precio: 125000 }
            }
        },
        frenos: {
            marcas: {
                "Brembo GT": { hp: 0, torque: 0, precio: 140000 },
                "StopTech BBK": { hp: 0, torque: 0, precio: 145000 }
            }
        },
        llantas: {
            marcas: {
                "Neuspeed RSe10": { hp: 0, torque: 0, precio: 75000 },
                "Vossen CVT": { hp: 0, torque: 0, precio: 90000 }
            }
        },
        neumaticos: {
            marcas: {
                "Goodyear Eagle F1": { hp: 0, torque: 0, precio: 75000 },
                "Continental ExtremeContact DW": { hp: 0, torque: 0, precio: 80000 }
            }
        },
        suspension: {
            marcas: {
                "Eibach Pro-Kit": { hp: 0, torque: 0, precio: 120000 },
                "H&R Street Performance": { hp: 0, torque: 0, precio: 130000 }
            }
        },
        bodykit: {
            marcas: {
                "Oettinger Body Kit": { hp: 0, torque: 0, precio: 140000 },
                "Rieger Body Kit": { hp: 0, torque: 0, precio: 145000 }
            }
        },
        sistemasEnfriamiento: {
            radiador: {
                marcas: {
                    "Mishimoto Racing Radiator": { hp: 0, torque: 0, precio: 95000 },
                }
            },
            intercooler: {
                marcas: {
                    "Forge Motorsport Intercooler": { hp: 20, torque: 25, precio: 140000 },
                }
            },
            oilCooler: {
                marcas: {
                    "Mocal Oil Cooler": { hp: 0, torque: 0, precio: 75000 },
                }
            }
        },
        transmision: {
            marcas: {
                "South Bend Clutch": { hp: 0, torque: 0, precio: 115000 },
                "Clutchmasters FX400": { hp: 0, torque: 0, precio: 130000 }
            }
        }
    },
    "Renault Megane RS 2016": {
        turbo: {
            marcas: {
                "Forge Motorsport": { hp: 130, torque: 180, precio: 340000 },
                "Airtec Turbo Kit": { hp: 140, torque: 190, precio: 350000 }
            }
        },
        escape: {
            marcas: {
                "Akrapovic": { hp: 20, torque: 25, precio: 150000 },
                "Remus Sport": { hp: 18, torque: 22, precio: 145000 }
            }
        },
        reprogramacion: {
            marcas: {
                "RS Tuning Stage 2": { hp: 60, torque: 70, precio: 160000 },
                "EcuTek Pro": { hp: 58, torque: 68, precio: 155000 }
            }
        },
        frenos: {
            marcas: {
                "Brembo GT": { hp: 0, torque: 0, precio: 145000 },
                "StopTech ST40": { hp: 0, torque: 0, precio: 150000 }
            }
        },
        llantas: {
            marcas: {
                "OZ Racing Ultraleggera": { hp: 0, torque: 0, precio: 85000 },
                "Team Dynamics Pro Race": { hp: 0, torque: 0, precio: 95000 }
            }
        },
        neumaticos: {
            marcas: {
                "Michelin Pilot Super Sport": { hp: 0, torque: 0, precio: 75000 },
                "Yokohama Advan Neova AD08R": { hp: 0, torque: 0, precio: 80000 }
            }
        },
        suspension: {
            marcas: {
                "KW V3 Coilovers": { hp: 0, torque: 0, precio: 140000 },
                "H&R Sport Springs": { hp: 0, torque: 0, precio: 100000 }
            }
        },
        bodykit: {
            marcas: {
                "Renault Sport Body Kit": { hp: 0, torque: 0, precio: 130000 },
                "Maxton Design Kit": { hp: 0, torque: 0, precio: 140000 }
            }
        },
        sistemasEnfriamiento: {
            radiador: {
                marcas: {
                    "CSF Racing Radiator": { hp: 0, torque: 0, precio: 100000 },
                }
            },
            intercooler: {
                marcas: {
                    "Airtec Stage 3 Intercooler": { hp: 20, torque: 30, precio: 150000 },
                }
            },
            oilCooler: {
                marcas: {
                    "Mocal Oil Cooler": { hp: 0, torque: 0, precio: 75000 },
                }
            }
        },
        transmision: {
            marcas: {
                "Helix Autosport Clutch": { hp: 0, torque: 0, precio: 120000 },
                "Sachs Performance Clutch": { hp: 0, torque: 0, precio: 130000 }
            }
        }
    },
    "Peugeot 207 GTi 2012": {
        turbo: {
            marcas: {
                "Forge Intercooler": { hp: 90, torque: 120, precio: 260000 },
                "Hybrid Turbo": { hp: 100, torque: 130, precio: 270000 }
            }
        },
        escape: {
            marcas: {
                "Scorpion": { hp: 10, torque: 12, precio: 80000 },
                "Cobra Sport": { hp: 12, torque: 14, precio: 85000 }
            }
        },
        reprogramacion: {
            marcas: {
                "Superchips Bluefin": { hp: 35, torque: 40, precio: 90000 },
                "Remap Stage 2": { hp: 38, torque: 45, precio: 95000 }
            }
        },
        frenos: {
            marcas: {
                "Brembo GT": { hp: 0, torque: 0, precio: 130000 },
                "Tarox F2000": { hp: 0, torque: 0, precio: 135000 }
            }
        },
        llantas: {
            marcas: {
                "Speedline Corse": { hp: 0, torque: 0, precio: 70000 },
                "OZ Racing Alleggerita": { hp: 0, torque: 0, precio: 90000 }
            }
        },
        neumaticos: {
            marcas: {
                "Goodyear Eagle F1": { hp: 0, torque: 0, precio: 70000 },
                "Continental ExtremeContact DW": { hp: 0, torque: 0, precio: 75000 }
            }
        },
        suspension: {
            marcas: {
                "Bilstein B12": { hp: 0, torque: 0, precio: 140000 },
                "Eibach Sportline": { hp: 0, torque: 0, precio: 120000 }
            }
        },
        bodykit: {
            marcas: {
                "Musketier Body Kit": { hp: 0, torque: 0, precio: 120000 },
                "Maxi Tuning Kit": { hp: 0, torque: 0, precio: 130000 }
            }
        },
        sistemasEnfriamiento: {
            radiador: {
                marcas: {
                    "Mishimoto Racing Radiator": { hp: 0, torque: 0, precio: 95000 },
                }
            },
            intercooler: {
                marcas: {
                    "Forge Motorsport Intercooler": { hp: 20, torque: 25, precio: 140000 },
                }
            },
            oilCooler: {
                marcas: {
                    "Mocal Oil Cooler": { hp: 0, torque: 0, precio: 75000 },
                }
            }
        },
        transmision: {
            marcas: {
                "Helix Autosport Clutch": { hp: 0, torque: 0, precio: 115000 },
                "Sachs Performance Clutch": { hp: 0, torque: 0, precio: 120000 }
            }
        }
    },
    "Ford Focus 2016": {
        turbo: {
            marcas: {
                "Mountune MR300": { hp: 100, torque: 140, precio: 280000 },
                "Cobb Tuning": { hp: 110, torque: 150, precio: 290000 }
            }
        },
        escape: {
            marcas: {
                "Borla Exhaust": { hp: 15, torque: 18, precio: 100000 },
                "MagnaFlow Exhaust": { hp: 18, torque: 20, precio: 105000 }
            }
        },
        reprogramacion: {
            marcas: {
                "Mountune Accessport": { hp: 40, torque: 50, precio: 130000 },
                "Cobb Stage 3": { hp: 45, torque: 55, precio: 135000 }
            }
        },
        frenos: {
            marcas: {
                "Brembo GT": { hp: 0, torque: 0, precio: 145000 },
                "Wilwood BBK": { hp: 0, torque: 0, precio: 140000 }
            }
        },
        llantas: {
            marcas: {
                "OZ Racing Leggera HLT": { hp: 0, torque: 0, precio: 85000 },
                "Rotiform LAS-R": { hp: 0, torque: 0, precio: 90000 }
            }
        },
        neumaticos: {
            marcas: {
                "Bridgestone Potenza RE-71R": { hp: 0, torque: 0, precio: 80000 },
                "Michelin Pilot Sport 4S": { hp: 0, torque: 0, precio: 85000 }
            }
        },
        suspension: {
            marcas: {
                "Eibach Pro-Kit": { hp: 0, torque: 0, precio: 120000 },
                "KW V1 Coilovers": { hp: 0, torque: 0, precio: 130000 }
            }
        },
        bodykit: {
            marcas: {
                "Mountune Aero Kit": { hp: 0, torque: 0, precio: 140000 },
                "Maxton Design Kit": { hp: 0, torque: 0, precio: 130000 }
            }
        },
        sistemasEnfriamiento: {
            radiador: {
                marcas: {
                    "Mishimoto Racing Radiator": { hp: 0, torque: 0, precio: 95000 },
                }
            },
            intercooler: {
                marcas: {
                    "Mountune Intercooler": { hp: 20, torque: 25, precio: 140000 },
                }
            },
            oilCooler: {
                marcas: {
                    "Mocal Oil Cooler": { hp: 0, torque: 0, precio: 75000 },
                }
            }
        },
        transmision: {
            marcas: {
                "ACT Heavy Duty Clutch Kit": { hp: 0, torque: 0, precio: 115000 },
                "Exedy Stage 2 Clutch": { hp: 0, torque: 0, precio: 125000 }
            }
        }
    },
    "Chevrolet Cruze RS 2020": {
        turbo: {
            marcas: {
                "BorgWarner EFR": { hp: 120, torque: 150, precio: 310000 },
                "Garrett GTX": { hp: 130, torque: 160, precio: 320000 }
            }
        },
        escape: {
            marcas: {
                "Flowmaster": { hp: 12, torque: 15, precio: 90000 },
                "MagnaFlow Cat-Back": { hp: 15, torque: 18, precio: 95000 }
            }
        },
        reprogramacion: {
            marcas: {
                "Trifecta Tune": { hp: 40, torque: 50, precio: 115000 },
                "Bully Dog GT": { hp: 42, torque: 52, precio: 120000 }
            }
        },
        frenos: {
            marcas: {
                "Brembo GT": { hp: 0, torque: 0, precio: 145000 },
                "Wilwood Dynalite": { hp: 0, torque: 0, precio: 140000 }
            }
        },
        llantas: {
            marcas: {
                "Enkei TS-5": { hp: 0, torque: 0, precio: 80000 },
                "TSW Nurburgring": { hp: 0, torque: 0, precio: 90000 }
            }
        },
        neumaticos: {
            marcas: {
                "Continental ExtremeContact DWS06": { hp: 0, torque: 0, precio: 75000 },
                "Michelin Pilot Super Sport": { hp: 0, torque: 0, precio: 80000 }
            }
        },
        suspension: {
            marcas: {
                "Eibach Pro-Kit": { hp: 0, torque: 0, precio: 120000 },
                "H&R Street Performance": { hp: 0, torque: 0, precio: 130000 }
            }
        },
        bodykit: {
            marcas: {
                "RK Sport Body Kit": { hp: 0, torque: 0, precio: 140000 },
                "Duraflex Body Kit": { hp: 0, torque: 0, precio: 150000 }
            }
        },
        sistemasEnfriamiento: {
            radiador: {
                marcas: {
                    "Mishimoto Racing Radiator": { hp: 0, torque: 0, precio: 95000 },
                }
            },
            intercooler: {
                marcas: {
                    "Forge Motorsport Intercooler": { hp: 20, torque: 25, precio: 140000 },
                }
            },
            oilCooler: {
                marcas: {
                    "Mocal Oil Cooler": { hp: 0, torque: 0, precio: 75000 },
                }
            }
        },
        transmision: {
            marcas: {
                "South Bend Clutch": { hp: 0, torque: 0, precio: 115000 },
                "Clutchmasters FX400": { hp: 0, torque: 0, precio: 130000 }
            }
        }
    },
    "BMW 240i 2019": {
        turbo: {
            marcas: {
                "Pure Turbo Stage 2": { hp: 200, torque: 250, precio: 400000 },
                "Dinan Turbo Kit": { hp: 220, torque: 270, precio: 450000 }
            }
        },
        escape: {
            marcas: {
                "Akrapovic Evolution": { hp: 18, torque: 22, precio: 160000 },
                "Remus Exhaust": { hp: 20, torque: 25, precio: 170000 }
            }
        },
        reprogramacion: {
            marcas: {
                "Dinan Stage 3": { hp: 60, torque: 70, precio: 180000 },
                "BMS JB4": { hp: 65, torque: 75, precio: 190000 }
            }
        },
        frenos: {
            marcas: {
                "Brembo GT": { hp: 0, torque: 0, precio: 160000 },
                "StopTech Trophy Kit": { hp: 0, torque: 0, precio: 170000 }
            }
        },
        llantas: {
            marcas: {
                "OZ Racing Leggera HLT": { hp: 0, torque: 0, precio: 85000 },
                "HRE FF01": { hp: 0, torque: 0, precio: 120000 }
            }
        },
        neumaticos: {
            marcas: {
                "Michelin Pilot Super Sport": { hp: 0, torque: 0, precio: 80000 },
                "Pirelli P Zero": { hp: 0, torque: 0, precio: 85000 }
            }
        },
        suspension: {
            marcas: {
                "KW V3 Coilovers": { hp: 0, torque: 0, precio: 140000 },
                "H&R Sport Springs": { hp: 0, torque: 0, precio: 100000 }
            }
        },
        bodykit: {
            marcas: {
                "Vorsteiner VRS Aero": { hp: 0, torque: 0, precio: 170000 },
                "Dinan Carbon Fiber Body Kit": { hp: 0, torque: 0, precio: 190000 }
            }
        },
        sistemasEnfriamiento: {
            radiador: {
                marcas: {
                    "CSF Racing Radiator": { hp: 0, torque: 0, precio: 100000 },
                }
            },
            intercooler: {
                marcas: {
                    "Wagner Tuning Intercooler": { hp: 20, torque: 30, precio: 150000 },
                }
            },
            oilCooler: {
                marcas: {
                    "Setrab Oil Cooler": { hp: 0, torque: 0, precio: 80000 },
                }
            }
        },
        transmision: {
            marcas: {
                "Dinan High Performance Clutch": { hp: 0, torque: 0, precio: 150000 },
                "ACT Twin Disc Clutch": { hp: 0, torque: 0, precio: 160000 }
            }
        }
    },
    "Mercedes Benz CLA250 2017": {
        turbo: {
            marcas: {
                "Renntech Turbo Upgrade": { hp: 150, torque: 200, precio: 350000 },
                "Weistec Engineering": { hp: 160, torque: 210, precio: 370000 }
            }
        },
        escape: {
            marcas: {
                "Armytrix Valvetronic": { hp: 20, torque: 25, precio: 180000 },
                "Remus Exhaust": { hp: 18, torque: 22, precio: 170000 }
            }
        },
        reprogramacion: {
            marcas: {
                "Renntech ECU Upgrade": { hp: 55, torque: 65, precio: 170000 },
                "AMG Stage 2": { hp: 60, torque: 70, precio: 180000 }
            }
        },
        frenos: {
            marcas: {
                "Brembo GT": { hp: 0, torque: 0, precio: 170000 },
                "StopTech Big Brake Kit": { hp: 0, torque: 0, precio: 160000 }
            }
        },
        llantas: {
            marcas: {
                "AMG Multi-Spoke Wheels": { hp: 0, torque: 0, precio: 120000 },
                "OZ Racing Ultraleggera": { hp: 0, torque: 0, precio: 100000 }
            }
        },
        neumaticos: {
            marcas: {
                "Continental ContiSportContact 6": { hp: 0, torque: 0, precio: 85000 },
                "Michelin Pilot Sport 4S": { hp: 0, torque: 0, precio: 90000 }
            }
        },
        suspension: {
            marcas: {
                "KW V3 Coilovers": { hp: 0, torque: 0, precio: 160000 },
                "H&R Springs": { hp: 0, torque: 0, precio: 120000 }
            }
        },
        bodykit: {
            marcas: {
                "Brabus Aero Kit": { hp: 0, torque: 0, precio: 190000 },
                "AMG Styling Package": { hp: 0, torque: 0, precio: 200000 }
            }
        },
        sistemasEnfriamiento: {
            radiador: {
                marcas: {
                    "CSF Racing Radiator": { hp: 0, torque: 0, precio: 100000 },
                }
            },
            intercooler: {
                marcas: {
                    "Wagner Tuning Intercooler": { hp: 20, torque: 30, precio: 150000 },
                }
            },
            oilCooler: {
                marcas: {
                    "Setrab Oil Cooler": { hp: 0, torque: 0, precio: 80000 },
                }
            }
        },
        transmision: {
            marcas: {
                "Weistec Transmission Upgrade": { hp: 0, torque: 0, precio: 170000 },
                "AMG Performance Clutch": { hp: 0, torque: 0, precio: 180000 }
            }
        }
    }
};

let modeloAuto = "";
let precioTotal = 0;
let hpActual = 0;
let torqueActual = 0;
let modificacionesSeleccionadas = [];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('selectAutoBtn').addEventListener('click', function() {
        let seleccion = document.getElementById('autoSelect').value;
        configurarAuto(seleccion);
        document.getElementById('autoModal').style.display = 'none'; // Ocultar el modal después de la selección
        document.getElementById('cambiarModeloBtn').disabled = false; // Habilitar el botón Cambiar Modelo
    });

    document.getElementById('cambiarModeloBtn').addEventListener('click', function() {
        document.getElementById('autoModal').style.display = 'flex'; // Mostrar el modal nuevamente
        document.getElementById('cambiarModeloBtn').disabled = true; // Deshabilitar el botón Cambiar Modelo
    });

    document.getElementById('autoModal').style.display = 'flex';
    document.getElementById('cambiarModeloBtn').disabled = true;
});

function configurarAuto(auto) {
    if (autos[auto]) {
        modeloAuto = auto;
        hpActual = autos[auto].hp;
        torqueActual = autos[auto].torque;

        document.title = "Simulador de Modificaciones para " + modeloAuto;
        document.querySelector('h1').textContent = "Simulador de Modificaciones para " + modeloAuto;
        document.getElementById('hp').textContent = hpActual + " HP";
        document.getElementById('torque').textContent = torqueActual + " Nm";
        document.getElementById('precio').textContent = "0 ARS";

        generarModificaciones(auto);
    } else {
        alert("Auto no válido, intenta nuevamente.");
    }
}

function generarModificaciones(auto) {
    const modForm = document.getElementById('modForm');
    modForm.innerHTML = '';

    const modificaciones = modificacionesPorAuto[auto];
    if (!modificaciones) {
        alert("No hay modificaciones disponibles para este modelo.");
        return;
    }

    for (let mod in modificaciones) {
        if (mod !== 'sistemasEnfriamiento') {
            let label = document.createElement('label');
            let checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.dataset.modificacion = mod;
            checkbox.addEventListener('change', function() {
                document.getElementById(`select-${mod}`).disabled = !this.checked;
            });

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(" " + mod.charAt(0).toUpperCase() + mod.slice(1) + ": "));

            let select = document.createElement('select');
            select.id = `select-${mod}`;
            select.name = "modificaciones";
            select.dataset.modificacion = mod;
            select.disabled = true;

            for (let marca in modificaciones[mod].marcas) {
                let option = document.createElement('option');
                option.value = marca;
                option.textContent = marca + " - " + modificaciones[mod].marcas[marca].precio.toLocaleString('es-AR') + " ARS";
                option.dataset.hp = modificaciones[mod].marcas[marca].hp;
                option.dataset.torque = modificaciones[mod].marcas[marca].torque;
                option.dataset.precio = modificaciones[mod].marcas[marca].precio;
                select.appendChild(option);
            }

            label.appendChild(select);
            modForm.appendChild(label);
            modForm.appendChild(document.createElement('br'));
        } else {
            for (let parte in modificaciones[mod]) {
                let label = document.createElement('label');
                let checkbox = document.createElement('input');
                checkbox.type = "checkbox";
                checkbox.dataset.modificacion = `${mod}-${parte}`;
                checkbox.addEventListener('change', function() {
                    document.getElementById(`select-${mod}-${parte}`).disabled = !this.checked;
                });

                label.appendChild(checkbox);
                label.appendChild(document.createTextNode(" " + parte.charAt(0).toUpperCase() + parte.slice(1) + ": "));

                let select = document.createElement('select');
                select.id = `select-${mod}-${parte}`;
                select.name = "modificaciones";
                select.dataset.modificacion = `${mod}-${parte}`;
                select.disabled = true;

                for (let marca in modificaciones[mod][parte].marcas) {
                    let option = document.createElement('option');
                    option.value = marca;
                    option.textContent = marca + " - " + modificaciones[mod][parte].marcas[marca].precio.toLocaleString('es-AR') + " ARS";
                    option.dataset.hp = modificaciones[mod][parte].marcas[marca].hp;
                    option.dataset.torque = modificaciones[mod][parte].marcas[marca].torque;
                    option.dataset.precio = modificaciones[mod][parte].marcas[marca].precio;
                    select.appendChild(option);
                }

                label.appendChild(select);
                modForm.appendChild(label);
                modForm.appendChild(document.createElement('br'));
            }
        }
    }
}

function aplicarModificaciones() {
    hpActual = autos[modeloAuto].hp;
    torqueActual = autos[modeloAuto].torque;
    precioTotal = 0;
    modificacionesSeleccionadas = [];

    document.querySelectorAll('select[name="modificaciones"]').forEach(select => {
        if (!select.disabled) {
            const mod = select.dataset.modificacion.split('-')[0];
            const parte = select.dataset.modificacion.split('-')[1];
            const marca = select.value;
            const hp = parseInt(select.options[select.selectedIndex].dataset.hp);
            const torque = parseInt(select.options[select.selectedIndex].dataset.torque);
            const precio = parseInt(select.options[select.selectedIndex].dataset.precio);

            hpActual += hp;
            torqueActual += torque;
            precioTotal += precio;
            modificacionesSeleccionadas.push((parte ? parte + ' ' : '') + mod + " (" + marca + ")");
        }
    });

    mostrarResultados();
}

function mostrarResultados() {
    document.getElementById('hp').textContent = hpActual + " HP";
    document.getElementById('torque').textContent = torqueActual + " Nm";
    document.getElementById('precio').textContent = precioTotal.toLocaleString('es-AR') + " ARS";

    let mensaje = "Modificaciones aplicadas:\n" + 
                  modificacionesSeleccionadas.join(", ") + "\n\n" + 
                  "Caballos de Fuerza finales: " + hpActual + " HP\n" +
                  "Torque final: " + torqueActual + " Nm\n" +
                  "Presupuesto Total: " + precioTotal.toLocaleString('es-AR') + " ARS";

    document.getElementById('resultMessage').textContent = mensaje;
}

document.querySelector('button[onclick="calcular()"]').addEventListener('click', aplicarModificaciones);