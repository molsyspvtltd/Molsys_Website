import Machineimage from "../assets/BioCloud.png";
import Machineimages from "../assets/BioCloud.png";
import Machineimagess from "../assets/BioCloud.png";
import Machineimagesss from "../assets/BioCloud.png";
import Machineimagessss from "../assets/BioCloud.png";
import Machineimagesssss from "../assets/BioCloud.png";
export const ServiceList = [
    {
        service:"MolS_WGS_17",
        image: Machineimage,
        price: 27,
        description: "Whole Genome Sequencing Analysis (1-10 Gb of illumina Raw data): Steps involved are Raw Data QC, Assembly using minimum 2 Assemblers and selection of the best k-mer and n50, Annotation",
        paragraph: " hat involves mapping an organism's entire DNA Sequence without relying on a reference Genome. It's like creating a brand-new jigsaw puzzle from scratch, assembling all the pieces to reveal the Complete Genetic blueprint of an Organism. This method is indispensable for studying novel Species, identifying rare Genetic variations, and unraveling complex Genomes where reference data is unavailable.<br></br><br></br> <em>de novo</em> Sequencing is a vital tool in genomics, supporting diverse applications in Evolutionary Biology, Disease Research, and understanding the fundamental Genetic code of life. It opens new doors to exploring uncharted Genetic Territory and Fostering breakthrough Discoveries.</p>"
    },
    {
        service:"MolS_WGS_18",
        image: Machineimages,
        price: 35.98,
        description: " Whole Genome Sequencing Analysis (10-50 Gb of illumina Raw data): Steps involved are Raw Data QC, Assembly using minimum 2 Assemblers and selection of the best k-mer and n50, Annotation",
        paragraph: " Whole Genome Sequencing Analysis (10-50 Gb of illumina Raw data): Steps involved are Raw Data QC, Assembly using minimum 2 Assemblers and selection of the best k-mer and n50, Annotation using close reference, Gene Pathway analysis, completion of Draft using tools for scaffold stitching,  Design of graphs, Pie-Charts, HeatMap's and whatever appropriate  for Data Presentation maitaining publication Standards.<br></br><br></br> Support in writing Methodology, Results section in manuscript. Support may be extended based on Co-Authorship"
    },
    {
        service:"MolS_WGS_19",
        image: Machineimage,
        price: 35.98,
        description: "Whole Genome Sequencing Analysis (70-120 Gb of illumina Raw data): Steps involved are Raw Data QC,  Assembly using minimum 2 Assemblers and selection of the best k-mer and n50, Annotation ",
        paragraph: "Whole Genome Sequencing Analysis (70-120 Gb of illumina Raw data): Steps involved are Raw Data QC, Assembly using minimum 2 Assemblers and selection of the best k-mer and n50, Annotation using close reference, Gene Pathway analysis, completion of Draft using tools for scaffold stitching,  Design of graphs, Pie-Charts, HeatMap's and whatever appropriate for Data Presentation maitaining publication Standards. Support in writing Methodology, Results section in manuscript. Support may be extended based on Co-Authorship."
    },
    {
        service:"MolS_WGS_20",
        image: Machineimage,
        price: 35.98,
        description: "Whole Genome Sequencing Analysis (Greater Than 30 Gb of Mate pair illumina Raw data): Steps involved are Raw Data QC, Secondary assembly using mate pair library to improve primary",
        paragraph: "Whole Genome Sequencing Analysis (Greater Than 30 Gb of Mate pair illumina Raw data): Steps involved are Raw Data QC, Secondary assembly using mate pair  library to improve primary De Novo assembly using short reads from illumina/thermo ion s5 platform."
    },
    {
        service:"MolS_WGS_21",
        image: Machineimage,
        price: 35.98,
        description: " Whole Genome Sequencing Analysis (50-100 Gb of Mate pair illumina Raw data): Steps Involved are Raw Data QC,Secondary assembly using mate pair library to improve primary De Novo",
        paragraph: "Whole Genome Sequencing Analysis (50-100 Gb of Mate pair illumina Raw data): Steps Involved are Raw Data QC,Secondary assembly using mate pair library to improve primary De Novo assembly using short reads from illumina/thermo ion s5 platform."
    },
    {
        service:"MolS_WGS_22",
        image: Machineimage,
        price: 35.98,
        description: "  Whole Genome Sequencing Analysis for Per SMRT (5-10 Gb PacBio/nanopore Raw Data): Steps Involved are Raw Data QC, Secondary assembly using long single molecule sequencing platform.",
        paragraph: " Whole Genome Sequencing Analysis for Per SMRT (5-10 Gb PacBio/nanopore Raw Data): Steps Involved are Raw Data QC, Secondary assembly using long single molecule sequencing platform."
    },



    // {
    //     categories: [
    //       {
    //         name: "Data Generation Services",
    //         subcategories: [
    //           {
    //             name: "Sample Isolation",
    //             description: "DNA and RNA isolation and sample preparation services are the bedrock of molecular biology and genomics research. Accurate and efficient extraction of genetic material is crucial for downstream applications.",
    //             products: [
    //               {name: "Mols_DNA_i1", price: 27, image: Machineimagesssss, description: "DNA extraction service: Blood/Animal Tissue/Body Fluids - Extraction of NGS grade quality DNA from Blood/Animal Tissue/Body Fluids"},
    //               {name: "Mols_DNA_i2", price: 10, image: Machineimagesssss, description: "DNA extraction service: Soil/Water/Environmental - Extraction of NGS grade quality DNA from Soil/Water/Envionmental"},
    //               {name: "Mols_DNA_i3", price: 10, image: Machineimagesssss, description: "DNA extraction service: Soil/Water/Environmental - Extraction of NGS grade quality DNA from Soil/Water/Envionmental"},
    //               {name: "Mols_DNA_q1 ", price: 10, image: Machineimagesssss, description: "DNA QC: Gel based - QC of extracted DNA on PAGE to generate a clear Gel Picture"},
    //               {name: "Mols_DNA_q2", price: 10, image: Machineimagesssss, description: "DNA QC: picogreen based Qubit - QC of Extracted DNA on Qubit"},
    //               {name: "Mols_RNA_i1", price: 10, image: Machineimagesssss, description: "RNA extraction service: Blood/Animal Tissue/Body Fluids - Extraction of NGS/RT grade RNA from Bloob/Animal Tissue/Body Fluids"},
                 
    //             ]
    //           },
    //           {
    //             name: "WHOLE GENOME SEQUENCING",
    //             description: "Discover the full spectrum of genomics with our Whole Genome Sequencing services, powered by an array of cutting-edge platforms. From the Illumina NovaSeq2000, offering high-throughput precision.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },
    //           {
    //             name: "16S METAGENOME SEQUENCING",
    //             description:"Unlock the hidden world of microorganisms with our 16S Metagenome Sequencing service. We delve into the diversity of microbial communities.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },
    //           {
    //             name: "ITS METAGENOME SEQUENCING",
    //             description:"Welcome to our ITS Metagenome Sequencing service, your portal to understanding the fungal kingdom and microbial ecosystems. We utilize cutting-edge techniques to sequence the ITS.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },
    //           {
    //             name: "GENOTYPING BY SEQUENCING",
    //             description:"Explore the future of genetic analysis with our Genotyping by Sequencing (GBS) services. GBS combines the power of high-throughput sequencing technology with the precision of genotyping.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },
    //         ]
    //       },
    //       {
    //         name: "Data Generation Services",
    //         subcategories: [
    //           {
    //             name: "Sample Isolation",
    //             description: "DNA and RNA isolation and sample preparation services are the bedrock of molecular biology and genomics research. Accurate and efficient extraction of genetic material is crucial for downstream applications.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },
    //           {
    //             name: "WHOLE GENOME SEQUENCING",
    //             description: "Discover the full spectrum of genomics with our Whole Genome Sequencing services, powered by an array of cutting-edge platforms. From the Illumina NovaSeq2000, offering high-throughput precision.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },
    //           {
    //             name: "16S METAGENOME SEQUENCING",
    //             description:"Unlock the hidden world of microorganisms with our 16S Metagenome Sequencing service. We delve into the diversity of microbial communities.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },
    //           {
    //             name: "ITS METAGENOME SEQUENCING",
    //             description:"Welcome to our ITS Metagenome Sequencing service, your portal to understanding the fungal kingdom and microbial ecosystems. We utilize cutting-edge techniques to sequence the ITS.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },
    //           {
    //             name: "GENOTYPING BY SEQUENCING",
    //             description:"Explore the future of genetic analysis with our Genotyping by Sequencing (GBS) services. GBS combines the power of high-throughput sequencing technology with the precision of genotyping.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },
    //         ]
    //       },{
    //         name: "Data Analysis Services",
    //         subcategories: [
    //           {
    //             name: "WHOLE GENOME SEQUENCING (<em>de novo</em>)",
    //             description: "de novo whole genome sequencing is a groundbreaking genetic analysis technique that involves mapping an organism's entire DNA sequence without relying on a reference genome.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },
    //           {
    //             name: "RNA SEQUENCING",
    //             description: "RNA sequencing, or RNA-Seq, is a powerful molecular biology technique that allows researchers to explore the transcriptome of an organism, providing insights into gene expression and regulation.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },
    //           {
    //             name: "METAGENOME ANALYSIS",
    //             description:"Metagenome analysis is a transformative field in genomics that focuses on studying the collective genetic material within a complex environmental sample, such as soil, water, or the human microbiome.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },
    //           {
    //             name: "META-TRANSCRIPTOME ANALYSIS",
    //             description:"Meta-transcriptome analysis is a cutting-edge approach in genomics that involves studying the collective RNA transcripts from multiple organisms within an environment, as a microbial community.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },
    //           {
    //             name: "SMALL RNA SEQUENCING",
    //             description:"Small RNA sequencing (Small RNA-Seq) is a powerful molecular biology technique that focuses on the analysis of short RNA molecules, typically 20-30 nucleotides in length, revealing their involvement in gene silencing.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },
    //           {
    //             name: "ChIP SEQUENCING",
    //             description:"ChIP-Seq (Chromatin Immunoprecipitation Sequencing) is a revolutionary genomics technique used to investigate protein-DNA interactions at a genome-wide scale. It combines ChIP, which enriches DNA fragments.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },
    //           {
    //             name: "WHOLE GENOME RE-SEQUENCING",
    //             description:"Whole Genome Re-Sequencing is an advanced genomic technique that involves re-analyzing the entire genetic material of an organism, comparing it to a known reference genome.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },
    //           {
    //             name: "WHOLE EXOME ANALYSIS",
    //             description:"Whole Exome Analysis, also known as Whole Exome Sequencing (WES), is a cutting-edge genomic technique that focuses on sequencing the exome – the protein-coding regions of an organism's genome.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },
    //           {
    //             name: "BioCloud SERVICES",
    //             description:"Welcome to Analytic BioCloud, your gateway to streamlined biological data management. Our platform offers a secure and scalable solution for hosting and analyzing your vital biological data in the cloud.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },

    //         ]
    //       },
    //       {
    //         name: "MicroArrays",
    //         subcategories: [
    //           {
    //             name: "AGRI GENOTYPING",
    //             description: "Discover the future of precision agriculture with our cutting-edge Agrigenotyping Service using Illumina iScan technology. This offer farmers and researchers a powerful tool to unlock the genetic potential of crops and livestock.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },
    //           {
    //             name: "LIVESTOCK GENOTYPING",
    //             description: "Elevate your livestock breeding programs with our advanced Livestock Genotyping services, powered by Illumina Bead Arrays technology. Our state-of-the-art microarray services provide unparalleled insights.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },
    //           {
    //             name: "PET GENOTYPING",
    //             description:"Uncover the genetic mysteries of your beloved pets with our Pet Genotyping services, powered by Illumina Bead Arrays technology. At our cutting-edge facility, we offer comprehensive genetic analysis for both canines and felines.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },
    //           {
    //             name: "MOUSE ARRAYS",
    //             description:"Welcome to the forefront of scientific discovery with our Mouse Bead Arrays, including the GIGA MUGA and Methylation Array, powered by Illumina iScan technology. Our research services provide an invaluable resource for scientists.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },
    //           {
    //             name: "HUMAN ARRAYS",
    //             description:"Experience the cutting-edge of human genomics and cytogenetics research with our Illumina Human Bead Arrays service. We empower scientists and researchers with comprehensive tools for population genomics, delving into the genetic diversity of human populations.",
    //             products: [
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //               {name: "Product 1", price: 10, image: "image1.jpg", description: "Description 1"},
    //             ]
    //           },
    //         ]
    //       },
    //     ]
    //   }
      

];