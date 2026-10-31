export interface IsotopeCatalogEntry {
  id: string;
  name: string;
  symbol: string;
  energy: string;
  description: string;
  naturallyStable: boolean;
}

export const ISOTOPE_CATALOG: IsotopeCatalogEntry[] = [
  {
    id: "iso-cs137",
    name: "Cesium-137",
    symbol: "Cs-137",
    energy: "661.7 keV (gamma)",
    description:
      "Radioactive fission product. Emits beta radiation and a characteristic 661.7 keV gamma ray through Ba-137m decay.",
    naturallyStable: false,
  },
  {
    id: "iso-ir192",
    name: "Iridium-192",
    symbol: "Ir-192",
    energy: "296, 308, 317, 468 keV (gamma)",
    description:
      "Radioactive isotope used in industrial radiography and medical brachytherapy. Emits multiple gamma rays.",
    naturallyStable: false,
  },
  {
    id: "iso-se75",
    name: "Selenium-75",
    symbol: "Se-75",
    energy: "136, 265, 280, 401 keV (gamma)",
    description:
      "Electron-capture radionuclide used in industrial radiography and specialized diagnostic applications.",
    naturallyStable: false,
  },
  {
    id: "iso-yb169",
    name: "Ytterbium-169",
    symbol: "Yb-169",
    energy: "63, 110, 130, 198, 308 keV (gamma)",
    description:
      "Radioactive ytterbium isotope emitting low-energy photons. Used in specialized radiography and brachytherapy research.",
    naturallyStable: false,
  },
  {
    id: "iso-tm170",
    name: "Thulium-170",
    symbol: "Tm-170",
    energy: "84.3 keV (gamma); ~969 keV (beta max)",
    description:
      "Beta-emitting radionuclide with an 84.3 keV gamma line, used in specialized radiation-source applications.",
    naturallyStable: false,
  },
  {
    id: "iso-am241",
    name: "Americium-241",
    symbol: "Am-241",
    energy: "59.54 keV (gamma); ~5.49 MeV (alpha)",
    description:
      "Alpha-emitting radionuclide with a characteristic 59.54 keV gamma ray. Used in smoke detectors and industrial gauges.",
    naturallyStable: false,
  },
  {
    id: "iso-sr90",
    name: "Strontium-90",
    symbol: "Sr-90",
    energy: "546 keV (beta max); 2280 keV (Y-90 beta max)",
    description:
      "Radioactive fission product emitting beta particles. Its daughter Yttrium-90 produces higher-energy beta radiation.",
    naturallyStable: false,
  },
  {
    id: "iso-kr85",
    name: "Krypton-85",
    symbol: "Kr-85",
    energy: "687 keV (beta max); 514 keV (weak gamma)",
    description:
      "Radioactive noble gas produced during nuclear fission. Primarily emits beta radiation and a weak gamma line.",
    naturallyStable: false,
  },
  {
    id: "iso-pm147",
    name: "Promethium-147",
    symbol: "Pm-147",
    energy: "224.6 keV (beta max)",
    description:
      "Predominantly beta-emitting radionuclide used in industrial thickness gauges and specialized radiation sources.",
    naturallyStable: false,
  },
  {
    id: "iso-na22",
    name: "Sodium-22",
    symbol: "Na-22",
    energy: "1274.5 keV (gamma); 511 keV (annihilation)",
    description:
      "Positron-emitting radionuclide used for detector calibration. Produces a 1274.5 keV gamma ray and 511 keV annihilation photons.",
    naturallyStable: false,
  },
  {
    id: "iso-co57",
    name: "Cobalt-57",
    symbol: "Co-57",
    energy: "122.1, 136.5 keV (gamma)",
    description:
      "Electron-capture radionuclide used in gamma spectrometry calibration and specialized medical applications.",
    naturallyStable: false,
  },
  {
    id: "iso-f18",
    name: "Fluorine-18",
    symbol: "F-18",
    energy: "511 keV (annihilation photons)",
    description:
      "Positron-emitting radionuclide widely used in PET diagnostic imaging, including FDG PET scans.",
    naturallyStable: false,
  },
  {
    id: "iso-pd103",
    name: "Palladium-103",
    symbol: "Pd-103",
    energy: "~20-23 keV (characteristic X-rays)",
    description:
      "Electron-capture radionuclide emitting low-energy characteristic X-rays. Used in permanent-seed brachytherapy.",
    naturallyStable: false,
  },
  {
    id: "iso-th232",
    name: "Thorium-232",
    symbol: "Th-232",
    energy: "~4.0 MeV (alpha); daughter gamma emissions",
    description:
      "Naturally occurring primordial alpha emitter. Its radioactive decay chain produces multiple gamma-emitting daughter radionuclides.",
    naturallyStable: false,
  },
  {
    id: "iso-cd109",
    name: "Cadmium-109",
    symbol: "Cd-109",
    energy: "88.03 keV (gamma); ~22-25 keV (Ag X-rays)",
    description:
      "Electron-capture radionuclide used in X-ray fluorescence instruments and radiation detector calibration.",
    naturallyStable: false,
  },
  {
    id: "iso-co60",
    name: "Cobalt-60",
    symbol: "Co-60",
    energy: "1173.2, 1332.5 keV (gamma)",
    description:
      "Beta-decaying radionuclide emitting two prominent gamma rays. Used in industrial radiography, sterilization, and radiotherapy.",
    naturallyStable: false,
  },
  {
    id: "iso-i131",
    name: "Iodine-131",
    symbol: "I-131",
    energy: "364.5 keV (gamma); ~606 keV (beta max)",
    description:
      "Radioactive iodine used in thyroid diagnosis and treatment. Emits beta particles and gamma rays.",
    naturallyStable: false,
  },
  {
    id: "iso-tc99m",
    name: "Technetium-99m",
    symbol: "Tc-99m",
    energy: "140.5 keV (gamma)",
    description:
      "Metastable radionuclide widely used in diagnostic nuclear medicine and SPECT imaging.",
    naturallyStable: false,
  },
  {
    id: "iso-u238",
    name: "Uranium-238",
    symbol: "U-238",
    energy: "~4.2 MeV (alpha); weak gamma emissions",
    description:
      "Naturally occurring primordial alpha emitter and parent of the uranium-238 radioactive decay series.",
    naturallyStable: false,
  },
  {
    id: "iso-k40",
    name: "Potassium-40",
    symbol: "K-40",
    energy: "1460.8 keV (gamma)",
    description:
      "Naturally occurring radionuclide found in potassium-containing materials and a contributor to natural background radiation.",
    naturallyStable: false,
  },
  {
    id: "iso-ra226",
    name: "Radium-226",
    symbol: "Ra-226",
    energy: "186.2 keV (gamma); ~4.78 MeV (alpha)",
    description:
      "Naturally occurring alpha emitter in the uranium-238 decay series. Decays to radioactive Radon-222.",
    naturallyStable: false,
  },
  {
    id: "iso-cs133",
    name: "Cesium-133",
    symbol: "Cs-133",
    energy: "Stable isotope",
    description:
      "The only stable isotope of cesium. Used in atomic clocks and precision frequency standards.",
    naturallyStable: true,
  },
  {
    id: "iso-co59",
    name: "Cobalt-59",
    symbol: "Co-59",
    energy: "Stable isotope",
    description:
      "The only stable isotope of cobalt. Naturally occurring in cobalt-containing materials.",
    naturallyStable: true,
  },
  {
    id: "iso-fe56",
    name: "Iron-56",
    symbol: "Fe-56",
    energy: "Stable isotope",
    description:
      "Stable and naturally abundant isotope of iron, important in nuclear structure and astrophysics.",
    naturallyStable: true,
  },
  {
    id: "iso-c12",
    name: "Carbon-12",
    symbol: "C-12",
    energy: "Stable isotope",
    description:
      "Stable and most abundant isotope of carbon. Used as the reference for the unified atomic mass unit.",
    naturallyStable: true,
  },
  {
    id: "iso-pu239",
    name: "Plutonium-239",
    symbol: "Pu-239",
    energy: "~5.16 MeV (alpha)",
    description:
      "Radioactive, fissile plutonium isotope with a half-life of approximately 24,110 years. Primarily emits alpha particles.",
    naturallyStable: false,
  },
  {
    id: "iso-c14",
    name: "Carbon-14",
    symbol: "C-14",
    energy: "156.5 keV (beta max)",
    description:
      "Radioactive carbon isotope used in radiocarbon dating. Decays by low-energy beta emission.",
    naturallyStable: false,
  },
  {
    id: "iso-h3",
    name: "Tritium",
    symbol: "H-3",
    energy: "18.6 keV (beta max)",
    description:
      "Radioactive hydrogen isotope containing two neutrons. Emits low-energy beta particles and is used in tracer applications.",
    naturallyStable: false,
  },
  {
    id: "iso-cs134",
    name: "Cesium-134",
    symbol: "Cs-134",
    energy: "604.7, 795.9 keV (gamma)",
    description:
      "Radioactive cesium isotope that undergoes beta decay and emits multiple characteristic gamma rays.",
    naturallyStable: false,
  },
  {
    id: "iso-rn222",
    name: "Radon-222",
    symbol: "Rn-222",
    energy: "5.49 MeV (alpha)",
    description:
      "Naturally occurring radioactive noble gas produced by Radium-226 decay. An alpha emitter with a half-life of approximately 3.8 days.",
    naturallyStable: false,
  },
];
