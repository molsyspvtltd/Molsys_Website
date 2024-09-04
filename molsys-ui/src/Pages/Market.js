import React from "react";
import "../style/Market.css";
import * as Icon from "react-bootstrap-icons";
import Machineimage from "../assets/BioCloud.png";
import Machineimages from "../assets/BioCloud.png";
import Machineimagess from "../assets/BioCloud.png";
import Machineimagesss from "../assets/BioCloud.png";
import Machineimagessss from "../assets/BioCloud.png";
import Machineimagesssss from "../assets/BioCloud.png";
import Flyres from '../assets/Flyer_BTS_Front_edited.jpg';
import { Link } from 'react-router-dom';

const paragraphStyle = {
  textAlign: 'justify',
};

const dataList = [
        {
          category: "Data Generation Services",
          subcategories: [
            {
              subcatname: "SAMPLE ISOLATION",
              description: "DNA and RNA isolation and sample preparation services are the bedrock of molecular biology and genomics research. Accurate and efficient extraction of genetic material is crucial for downstream applications.",
              screenRoute: "/SampleIsolationPage",
              products: [
                {
                  service: "Mols_DNA_i1",
                  price: 27,
                  image: "MachineImage1.jpg",
                  description: "DNA extraction service: Blood/Animal Tissue/Body Fluids - Extraction of NGS grade quality DNA from Blood/Animal Tissue/Body Fluids"
                },
                {
                  service: "Mols_DNA_i2",
                  price: 10,
                  image: "MachineImage2.jpg",
                  description: "DNA extraction service: Plant Tissue/Extract/Flower etc - Extraction of NGS grade quality DNA from Plant Tissue/Extract/Flower etc"
                },
                {
                  service: "Mols_DNA_i3",
                  price: 10,
                  image: "MachineImage2.jpg",
                  description: "DNA extraction service: Soil/Water/Environmental - Extraction of NGS grade quality DNA from Soil/Water/Envionmental"
                },
                {
                  service: "Mols_DNA_q1",
                  price: 10,
                  image: "MachineImage2.jpg",
                  description: "DNA QC: Gel based - QC of extracted DNA on PAGE to generate a clear Gel Picture"
                },
                {
                  service: "Mols_DNA_q2",
                  price: 10,
                  image: "MachineImage2.jpg",
                  description: "DNA QC: picogreen based Qubit - QC of Extracted DNA on Qubit"
                },
                {
                  service: "Mols_RNA_i1",
                  price: 10,
                  image: "MachineImage2.jpg",
                  description: "RNA extraction service: Blood/Animal Tissue/Body Fluids - Extraction of NGS/RT grade RNA from Bloob/Animal Tissue/Body Fluids"
                },
                {
                  service: "Mols_RNA_i2",
                  price: 10,
                  image: "MachineImage2.jpg",
                  description: "RNA extraction service: Plant Tissue/Extract/Flower etc - Extraction of NGS/RT grade RNA from Plant Tissue/Extract/Flower etc"
                },
                {
                  service: "Mols_RNA_i3",
                  price: 10,
                  image: "MachineImage2.jpg",
                  description: "RNA extraction service: Soil/Water/Environmental - Extraction of NGS/RT grade RNA from Soil/Water/Enviormental"
                },
                {
                  service: "Mols_RNA_q1",
                  price: 10,
                  image: "MachineImage2.jpg",
                  description: "RNA QC: Gel based - QC of extracted RNA on PAGE to generate a clear Gel Picture"
                },
                {
                  service: "Mols_RNA_q2",
                  price: 10,
                  image: "MachineImage2.jpg",
                  description: "RNA QC: Bioanalyzer/Tapestation - QC of Extracted RNA on Bioanalyzer/Tapeststion"
                },
              ]
            },
            {
              subcatname: "WHOLE GENOME SEQUENCING",
              description: "Discover the full spectrum of genomics with our Whole Genome Sequencing services, powered by an array of cutting-edge platforms.",
              screenRoute: "/WholeGenomeSeqGen",
              products: [
                {
                  service: "Mols_Lib_1",
                  price: 10,
                  image: "image1.jpg",
                  description: "illumina Short Insert DNA library Prep and QC - Preparation of Short Insert Library for illumina based sequencing",
                  screenRoute: "/WholeGenomeSeqGen",
                },
                {
                  service: "Mols_Lib_2",
                  price: 10,
                  image: "image1.jpg",
                  description: "illumina amplicon DNA library Prep and QC",
                  screenRoute: "/WholeGenomeSeqGen",
                },
                {
                  service: "Mols_Lib_3",
                  price: 10,
                  image: "image1.jpg",
                  description: "illumina matepair  DNA library Prep and QC (2-4kb/5-7kb)"
                },
                {
                  service: "Mols_Dat_1",
                  price: 10,
                  image: "image1.jpg",
                  description: "illumina based Sequencing per Gb (150X2) - Generation of 150 paired end reads on illumina NovaSeq"
                },
                {
                  service: "Mols_Dat_2",
                  price: 10,
                  image: "image1.jpg",
                  description: "Bi-Sulphite Library Sequencing per Gb (150X2) - Generation of 150 paired end reads on illumina based sequencer"
                },
                {
                  service: "Mols_Lib_4",
                  price: 10,
                  image: "image1.jpg",
                  description: "Bisulphite Library Preparation - Preparation of Bi-Sulphite Library for illumina based sequencing"
                },
                {
                  service: "Mols_Lib_5",
                  price: 10,
                  image: "image1.jpg",
                  description: "PacBio Library Preparation - Library preparation from DNA with double blue-pipin selection insert size 2-10 KB"
                },
                {
                  service: "Mols_Lib_6",
                  price: 10,
                  image: "image1.jpg",
                  description: "Oxford Nanopore Library Prepration - Preparation of library for sequencing on Oxford Nanopore Technology"
                },
                {
                  service: "Mols_Lib_7",
                  price: 10,
                  image: "image1.jpg",
                  description: "sRNA Library - Preparation of smallRNA Library for illumina based sequencing platform"
                },
                {
                  service: "Mols_Dat_3",
                  price: 10,
                  image: "image1.jpg",
                  description: "PacBio Sequencing per Gb - Sequencing of QC approved libraries on PacBio Sequel II Platform "
                },
                {
                  service: "Mols_Dat_4",
                  price: 10,
                  image: "image1.jpg",
                  description: "Oxford Nanopore Sequencing (per Gb) - Sequencing on QC approved librires on Oxford Nanopore Technology Sequencer"
                },
                {
                  service: "Mols_Lib_8",
                  price: 10,
                  image: "image1.jpg",
                  description: "10X Library - Preparation of 10X libraries from QC approved DNA for Deep Sequencing"
                },
                {
                  service: "Mols_Lib_9",
                  price: 10,
                  image: "image1.jpg",
                  description: "Hi-C Library - Preparation of Hi-C libries for Deep Sequencing"
                },
                
              ]
            },
            {
              subcatname: "16S METAGENOME SEQUENCING",
              description: "Unlock the hidden world of microorganisms with our 16S Metagenome Sequencing service. We delve into the diversity of microbial communities.",
              products: [
                {
                  service: "Mols_Ampli_1",
                  price: 10,
                  image: "image1.jpg",
                  description: "16S-30K ionS5 - Generation of 30K reads on ionS5 platform for 16S Metagenome"
                },
                {
                  service: "Mols_Ampli_2",
                  price: 10,
                  image: "image1.jpg",
                  description: "16S-50K ionS5 - Generation of 50K reads on ionS5 platform for 16S Metagenome"
                },
                {
                  service: "Mols_Ampli_3",
                  price: 10,
                  image: "image1.jpg",
                  description: "16S-100K ionS5 - Generation of 100K reads on ionS5 platform for 16S Metagenome"
                },
              ]
            },
            {
              subcatname: "ITS METAGENOME SEQUENCING",
              description: "Welcome to our ITS Metagenome Sequencing service, your portal to understanding the fungal kingdom and microbial ecosystems. We utilize cutting-edge techniques to sequence the ITS.",
              products: [
                {
                  service: "Mols_Ampli_4",
                  price: 10,
                  image: "image1.jpg",
                  description: "ITS1-30K ionS5 - Generation of 30K reads on ionS5 platform for fungal ITS sequencing 1"
                },
                {
                  service: "Mols_Ampli_5",
                  price: 10,
                  image: "image1.jpg",
                  description: "ITS1-50K ionS5 - Generation of 50K reads on ionS5 platform for fungal ITS sequencing"
                },
                {
                  service: "Mols_Ampli_6",
                  price: 10,
                  image: "image1.jpg",
                  description: "ITS1-100K ionS5 - Generation of 100K reads on ionS5 platform for fungal ITS sequencing"
                },
              ]
            },
            {
              subcatname: "GENOTYPING BY SEQUENCING",
              description: "Explore the future of genetic analysis with our Genotyping by Sequencing (GBS) services. GBS combines the power of high-throughput sequencing technology with the precision of genotyping.",
              products: [
                {
                  service: "Mols_GBS_1",
                  price: 10,
                  image: "image1.jpg",
                  description: "GBS - Genotyping by sequencing- 1 plate 96 Samples"
                },
               
              ]
            },
            // Add other subcategories here
          ]
        },
        {
          category: "Data Analysis Services",
          subcategories: [
            {
              subcatname: "WHOLE GENOME SEQUENCING (de novo)",
              description: "de novo whole genome sequencing is a groundbreaking genetic analysis technique that involves mapping an organism's entire DNA sequence without relying on a reference genome.",
              products: [
                {
                  service: "MolS_WGS_17",
                  price: 10,
                  image: "image1.jpg",
                  description: "Whole Genome Sequencing Analysis (1-10 Gb of illumina Raw data): Steps involved are Raw Data QC, Assembly using minimum 2 Assemblers and selection of the best k-mer and n50, Annotation using close reference, Gene Pathway analysis, completion of Draft using tools for scaffold stitching,  Design of graphs, Pie-Charts, HeatMap's and whatever appropriate for Data Presentation maitaining publication Standards. Support in writing Methodology, Results section in manuscript. Support may be extended based on Co-Authorship"
                },
                {
                  service: "MolS_WGS_18",
                  price: 10,
                  image: "image1.jpg",
                  description: "Whole Genome Sequencing Analysis (10-50 Gb of illumina Raw data): Steps involved are Raw Data QC, Assembly using minimum 2 Assemblers and selection of the best k-mer and n50, Annotation using close reference, Gene Pathway analysis, completion of Draft using tools for scaffold stitching,  Design of graphs, Pie-Charts, HeatMap's and whatever appropriate for Data Presentation maitaining publication Standards. Support in writing Methodology, Results section in manuscript. Support may be extended based on Co-Authorship"
                },
                {
                  service: "MolS_WGS_19",
                  price: 10,
                  image: "image1.jpg",
                  description: "Whole Genome Sequencing Analysis (70-120 Gb of illumina Raw data): Steps involved are Raw Data QC, Assembly using minimum 2 Assemblers and selection of the best k-mer and n50, Annotation using close reference, Gene Pathway analysis, completion of Draft using tools for scaffold stitching,  Design of graphs, Pie-Charts, HeatMap's and whatever appropriate for Data Presentation maitaining publication Standards. Support in writing Methodology, Results section in manuscript. Support may be extended based on Co-Authorship"
                },{
                  service: "MolS_WGS_20",
                  price: 10,
                  image: "image1.jpg",
                  description: "Whole Genome Sequencing Analysis (<30 Gb of Mate pair illumina Raw data): Steps involved are Raw Data QC, Secondary assembly using mate pair library to improve primary De Novo assembly using short reads from illumina/thermo ion s5 platform."
                },{
                  service: "MolS_WGS_21",
                  price: 10,
                  image: "image1.jpg",
                  description: "Whole Genome Sequencing Analysis (50-100 Gb of Mate pair illumina Raw data): Steps Involved are Raw Data QC, Secondary assembly using mate pair library to improve primary De Novo assembly using short reads from illumina/thermo ion s5 platform."
                },{
                  service: "MolS_WGS_22",
                  price: 10,
                  image: "image1.jpg",
                  description: "Whole Genome Sequencing Analysis for Per SMRT (5-10 Gb PacBio/nanopore Raw Data): Steps Involved are Raw Data QC, Secondary assembly using long single molecule sequencing platform."
                },
              ]
            }, {
              subcatname: "RNA SEQUENCING",
              description: "RNA sequencing, or RNA-Seq, is a powerful molecular biology technique that allows researchers to explore the transcriptome of an organism, providing insights into gene expression and regulation.",
              products: [
                {
                  service: "MolS_RNA_01",
                  price: 10,
                  image: "image1.jpg",
                  description: "De Novo Transcriptome Analysis (< 30 Million Reads) Steps involved are Raw Data QC, Assembly, Annotation, Differential Gene Expression, Design of graphs, Pie-Charts, HeatMap's and whatever appropriate for Data Presentation maitaining publication Standards. Support in writing Methodology, Results section in manuscript. Support may be extended based on Co-Authorship"
                },
                {
                  service: "MolS_RNA_02",
                  price: 10,
                  image: "image1.jpg",
                  description: "De Novo Transcriptome Analysis (~50 Million Reads) Steps involved are Raw Data QC, Assembly, Annotation, Classification of RNA Family (mRNA, lnCRNA, Linc RNA and etc)Differential Gene Expression, Design of graphs, Pie-Charts, HeatMap's and whatever appropriate for Data Presentation maitaining publication Standards. Support in writing Methodology, Results section in manuscript. Support may be extended based on Co-Authorship"
                },
                {
                  service: "MolS_RNA_03",
                  price: 10,
                  image: "image1.jpg",
                  description: "De Novo Transcriptome Analysis (>50 Million Reads) Steps involved are Raw Data QC, Assembly, Annotation, Classification of RNA Family (mRNA, lnCRNA, Linc RNA and etc)Differential Gene Expression, Design of graphs, Pie-Charts, HeatMap's and whatever appropriate for Data Presentation maitaining publication Standards. Support in writing Methodology, Results section in manuscript. Support may be extended based on Co-Authorship"
                },{
                  service: "MolS_RNA_01_AL_01",
                  price: 10,
                  image: "image1.jpg",
                  description: "Alignment based (BLAST based) Transcriptome Analysis (< 30 Million Reads) Steps involved are Raw Data QC, Alingment, Annotation, Differential Gene Expression, Design of graphs, Pie-Charts, HeatMap's and whatever appropriate for Data Presentation maitaining publication Standards. Support in writing Methodology, Results section in manuscript. Support may be extended based on Co-Authorship"
                },{
                  service: "MolS_RNA_02_AL_02",
                  price: 10,
                  image: "image1.jpg",
                  description: "Alignment based (BLAST based) Analysis (~50 Million Reads) Steps involved are Raw Data QC, Alingment, Annotation, Classification of RNA Family (mRNA, lnCRNA, Linc RNA and etc)Differential Gene Expression, Design of graphs, Pie-Charts, HeatMap's and whatever appropriate for Data Presentation maitaining publication Standards. Support in writing Methodology, Results section in manuscript. Support may be extended based on Co-Authorship"
                },{
                  service: "MolS_RNA_03_AL_03",
                  price: 10,
                  image: "image1.jpg",
                  description: "Alignment based (BLAST based) Transcriptome Analysis (>50 Million Reads) Steps involved are Raw Data QC, Alingment, Annotation, Classification of RNA Family (mRNA, lnCRNA, Linc RNA and etc)Differential Gene Expression, Design of graphs, Pie-Charts, HeatMap's and whatever appropriate for Data Presentation maitaining publication Standards. Support in writing Methodology, Results section in manuscript. Support may be extended based on Co-Authorship"
                },
              ]
            }, {
              subcatname: "METAGENOME SEQUENCING",
              description: "Metagenome analysis is a transformative field in genomics that focuses on studying the collective genetic material within a complex environmental sample, such as soil, water, or the human microbiome.",
              products: [
                {
                  service: "MolS_MetaG_09",
                  price: 10,
                  image: "image1.jpg",
                  description: "16S (v3-v4)Bacterial/ITS Fungal Metagenome Seq Analysis(illumina 0.5-2 Million reads/ionS5 30K/50K/100K): Raw Data, read clustering, Filtering of Chimera and PCR artifacts, classification of OTU's, funcitional association, rarefraction curve, estimation of diversity (alpha, beta & gamma), Design of graphs, Pie-Charts, HeatMap's and whatever appropriate for Data Presentation maitaining publication Standards. Support in writing Methodology, Results section in manuscript. Support may be extended based on Co-Authorship (minimum samples 6)"
                },
                {
                  service: "MolS_MetaG_10",
                  price: 10,
                  image: "image1.jpg",
                  description: "16S (v3-v4)Bacterial/ITS Fungal Metagenome Seq Analysis(0.5-2 Million readsionS5 30K/50K/100K): Raw Data, read clustering, Filtering of Chimera and PCR artifacts, classification of OTU's, funcitional association, rarefraction curve, estimation of diversity (alpha, beta & gamma), Design of graphs, Pie-Charts, HeatMap's and whatever appropriate for Data Presentation maitaining publication Standards. Support in writing Methodology, Results section in manuscript. Support may be extended based on Co-Authorship (minimum samples 12)"
                },
                {
                  service: "MolS_WGMeta_11",
                  price: 10,
                  image: "image1.jpg",
                  description: "De Novo- Whole Metagenome Sequencing (<50 milion reads): Steps involved are Raw Data QC, Assembly, Annotation, Biological functions and top pathways, Custom gene-pathway search, draft assembly of individual bacterial genomes (if possible), Plasmid Search, Design of graphs, Pie-Charts, HeatMap's and whatever appropriate for Data Presentation maitaining publication Standards. Support in writing Methodology, Results section in manuscript. Support may be extended based on Co-Authorship"
                },{
                  service: "MolS_WGMeta_12",
                  price: 10,
                  image: "image1.jpg",
                  description: "De Novo- Whole Metagenome Sequencing (50-100 milion reads): Steps involved are Raw Data QC, Assembly, Annotation, Biological functions and top pathways, Custom gene-pathway search, draft assembly of individual bacterial genomes (if possible), Plasmid Search, Design of graphs, Pie-Charts, HeatMap's and whatever appropriate .",
                },{
                  service: " MolS_WGMeta_13",
                  price: 10,
                  image: "image1.jpg",
                  description: "De Novo- Whole Metagenome Sequencing (>100 milion reads illumina/ PacBio hybrid): Steps involved are Raw Data QC, Assembly, Annotation, Biological functions and top pathways, Custom gene-pathway search, draft assembly of individual bacterial genomes (if possible), Plasmid Search, Design of graphs, Pie-Charts.", 
                },{
                  service: "MolS_WGMeta_14",
                  price: 10,
                  image: "image1.jpg",
                  description: "Alignment based Whole Metagenome Sequencing (<50 milion reads): Steps involved are Raw Data QC, Ref. Database based Alignment, Annotation, Biological functions and top pathways, Custom gene-pathway search, draft assembly of individual bacterial genomes (if possible), Plasmid Search, Design of graphs, Pie-Charts.", 
                },{
                  service: "MolS_WGMeta_15",
                  price: 10,
                  image: "image1.jpg",
                  description: "Alignment based Whole Metagenome Sequencing (50-100 milion reads): Steps involved are Raw Data QC, Ref. Database based Alignment, Annotation, Biological functions and top pathways, Custom gene-pathway search, draft assembly of individual bacterial genomes (if possible), Plasmid Search, Design of graphs, Pie-Charts.", 
                },{
                  service: "MolS_WGMeta_16",
                  price: 10,
                  image: "image1.jpg",
                  description: "Alignment based Whole Metagenome Sequencing (>100 milion reads with illumina PacBio Hybrid): Steps involved are Raw Data QC, Ref. Database based Alignment, Annotation, Biological functions and top pathways, Custom gene-pathway search, draft assembly of individual bacterial genomes (if possible).",
                },
              ]
            }, {
              subcatname: "META-TRANSCRIPTOME ANALYSIS",
              description: "Meta-transcriptome analysis is a cutting-edge approach in genomics that involves studying the collective RNA transcripts from multiple organisms within an environment, as a microbial community.",
              products: [
                {
                  service: "MolS_MeRNA_04",
                  price: 10,
                  image: "image1.jpg",
                  description: "De Novo Meta-Transcriptome Analysis (30-70 Million Reads) Steps involved are Raw Data QC, Assembly, Annotation, Classification of RNA Family and cumulative funcion, Top Biological functions, Gene Search, Differential Gene Expression, Design of graphs, Pie-Charts.",
                },
                {
                  service: "Mol_MeRNA_05",
                  price: 10,
                  image: "image1.jpg",
                  description: "De Novo Meta-Transcriptome Analysis (>70 Million Reads) Steps involved are Raw Data QC, Assembly, Annotation, Classification of RNA Family and cumulative funcion, Top Biological functions, Gene Search, Differential Gene Expression, Design of graphs, Pie-Charts.", 
                },
                {
                  service: "MolS_MeRNA_05",
                  price: 10,
                  image: "image1.jpg",
                  description: "Alignment based (BLAST based) Meta-Transcriptome Analysis (>70 Million Reads) Steps involved are Raw Data QC, Assembly, Annotation, Classification of RNA Family and cumulative funcion, Top Biological functions, Gene Search, Differential Gene Expression.",
                },
              ]
            }, {
              subcatname: "SMALL RNA SEQUENCING",
              description: "Small RNA sequencing (Small RNA-Seq) is a powerful molecular biology technique that focuses on the analysis of short RNA molecules, typically 20-30 nucleotides in length, revealing their involvement in gene silencing.",
              products: [
                {
                  service: "MolS_sRNA_06",
                  price: 10,
                  image: "image1.jpg",
                  description: "De Novo Analysis of small RNA(15-50 million reads) : Raw Data QC, Classification of small RNA Families (miRNA, siRNA, piRNA,etc), Annotation, binning into known and novel, functional predection (target prediction), association with transcriptome (if needed).", 
                },
                
              ]
            }, {
              subcatname: "ChIP SEQUENCING",
              description: "ChIP-Seq (Chromatin Immunoprecipitation Sequencing) is a revolutionary genomics technique used to investigate protein-DNA interactions at a genome-wide scale. It combines ChIP, which enriches DNA fragments.",
              products: [
                {
                  service: "Mol_ChIP_07",
                  price: 10,
                  image: "image1.jpg",
                  description: "ChIP Seq Data analysis (15-40 million reads): Raw Data QC, Alignment, search for true Motif's, Clustering Peak identification, Peak optimization, scoring and functional annotation and prediction(transcription factor, binding domain). Design of graphs, Pie-Charts.", 
                },
                {
                  service: "Mol_ChIP_08",
                  price: 10,
                  image: "image1.jpg",
                  description: "ChIP Seq Data analysis (>40 million reads): Raw Data QC, Alignment, search for true Motif's, Clustering Peak identification, Peak optimization, scoring and functional annotation and prediction(Histone modification pattern, other binding domain). Design of graphs, Pie-Charts.",
                },
                // Add other de novo Whole Genome Sequencing products here
              ]
            }, {
              subcatname: "WHOLE GENOME RE-SEQUENCING",
              description: "Whole Genome Re-Sequencing is an advanced genomic technique that involves re-analyzing the entire genetic material of an organism, comparing it to a known reference genome.",
              products: [
                {
                  service: "MolS_RRBS_23",
                  price: 10,
                  image: "image1.jpg",
                  description: "Whole Genome Methylome analysis from RRBS/ MeDIP Sequencing (5-15 Gb) : Steps involved are Raw data QC, Assembly/Alignement as appropriate from CPG islands converted library, annotation, indels, CNV, SNV analysis Variant calling (in alignment only). Design of graphs.",
                },
                {
                  service: "MolS_WGSRe_24",
                  price: 10,
                  image: "image1.jpg",
                  description: "Whole Genome Re-Sequencing Analysis (1-10 Gb of illumina Raw data): Steps involved are Raw Data QC, Alignement using BWA/Bowtie2, Annotation,indels, CNV, SNV analysis Variant calling, annotation of variant, effects of variants and novel variant reporting.",  
                },
                {
                  service: "MolS_WGSRe_25",
                  price: 10,
                  image: "image1.jpg",
                  description: "Whole Genome Re-Sequencing Analysis (20-50) Gb of illumina Raw data): Steps involved are Raw Data QC, Alignement using BWA/Bowtie2, Annotation,indels, CNV, SNV analysis Variant calling, annotation of variant, effects of variants and novel variant reporting.", 
                },
                {
                  service: "MolS_WGSRe_26",
                  price: 10,
                  image: "image1.jpg",
                  description: "Whole Genome Re-Sequencing Analysis (70-100) Gb of illumina Raw data): Steps involved are Raw Data QC, Alignement using BWA/Bowtie2, Annotation,indels, CNV, SNV analysis Variant calling, annotation of variant, effects of variants and novel variant reporting.", 
                },
                {
                  service: "MolS_WGSRe_27",
                  price: 10,
                  image: "image1.jpg",
                  description: "Whole Genome Re-Sequencing Analysis (70-100) Gb of illumina Raw data): Steps involved are Raw Data QC, Alignement using BWA/Bowtie2, Annotation,indels, CNV, SNV analysis Variant calling, annotation of variant.", 
                },
              ]
            }, {
              subcatname: "WHOLE EXOME ANALYSIS",
              description: "Whole Exome Analysis, also known as Whole Exome Sequencing (WES), is a cutting-edge genomic technique that focuses on sequencing the exome – the protein-coding regions of an organism's genome.",
              products: [
                {
                  service: "MolS_WES_28",
                  price: 10,
                  image: "image1.jpg",
                  description: "Whole Genome Exome Analysis (illumina/agilent/twist/etc Raw data): Steps involved are Raw Data QC, Alignement using BWA/Bowtie2, Annotation,indels, CNV, SNV analysis Variant calling, annotation of variant.",
                },
                
              ]
            }, {
              subcatname: "BioCloud SERVICES",
              description: "Welcome to Analytic BioCloud, your gateway to streamlined biological data management. Our platform offers a secure and scalable solution for hosting and analyzing your vital biological data in the cloud.",
              products: [
                {
                  service: "MolS_BioCloud_29",
                  price: 10,
                  image: "image1.jpg",
                  description: "BioCloud Cold Storage: Upto 100 Gb Data for 3 years, Secure and robust stroage, backed up in parallelized computing environment, retrieval based on query. Easy to share and handy."
                },
                {
                  service: "MolS_WGS_30",
                  price: 10,
                  image: "image1.jpg",
                  description: "Analytic_Genome BioCloud for individual genomes(< 50 Gb): Dynamic Cloud storage with computing interface for periodic improvization of annotation for 1 year. For Whole Genome Resequencing data only.",
                },
                {
                  service: "MolS_Biocloud_31",
                  price: 10,
                  image: "image1.jpg",
                  description: "Analytic_Genome BioCloud for individual genomes(70-100Gb): Dynamic Cloud storage with computing interface for periodic improvization of annotation for 1 year. For Whole Genome Resequencing data only."
                },
              ]
            },
           
          ]
        },
        {
          category: "Micro Arrays",
          subcategories: [
            {
              subcatname: "AGRI GENOTYPING",
              description: "Discover the future of precision agriculture with our cutting-edge Agrigenotyping Service using Illumina iScan technology. This offer farmers and researchers a powerful tool to unlock the genetic potential of crops and livestock.",
              products: [
                {
                  service: "Mols_Iscan_1",
                  price: 10,
                  image: "image1.jpg",
                  description: "Maize Infinium 50K Array Genotyping"
                },
                {
                  service: "Mols_Iscan_2",
                  price: 10,
                  image: "image1.jpg",
                  description: "Tomato Infinium 8K Array Genotyping"
                },
                {
                  service: "Mols_Iscan_3",
                  price: 10,
                  image: "image1.jpg",
                  description: "Wheat-Barley Infinium  Genotyping"
                },
                {
                  service: "Mols_Iscan_4",
                  price: 10,
                  image: "image1.jpg",
                  description: "Cotton Infinium Genotyping"
                },
                {
                  service: "Mols_Iscan_5",
                  price: 10,
                  image: "image1.jpg",
                  description: "Soy Infinium Genotyping"
                },
              ]
            },
            {
              subcatname: "LIVESTOCK GENOTYPING",
              description: "Elevate your livestock breeding programs with our advanced Livestock Genotyping services, powered by Illumina Bead Arrays technology. Our state-of-the-art microarray services provide unparalleled insights.",
              products: [
                {
                  service: "Mols_Iscan_6",
                  price: 10,
                  image: "image1.jpg",
                  description: "Bovine Whole Exome"
                },
                {
                  service: "Mols_Iscan_7",
                  price: 10,
                  image: "image1.jpg",
                  description: "Bovine SNP50 Array Genotyping"
                },
                {
                  service: "Mols_Iscan_8",
                  price: 10,
                  image: "image1.jpg",
                  description: "Bovine SNP LD Array Genotyping"
                },
                {
                  service: "Mols_Iscan_9",
                  price: 10,
                  image: "image1.jpg",
                  description: "Bovine SNP HD Array Genotyping"
                },
                {
                  service: "Mols_Iscan_10",
                  price: 10,
                  image: "image1.jpg",
                  description: "Ovine SNP 50 Array Genotyping"
                },
                {
                  service: "Mols_Iscan_11",
                  price: 10,
                  image: "image1.jpg",
                  description: "Porcine SNP 60 Array Genotyping "
                },
                {
                  service: "Mols_Iscan_12",
                  price: 10,
                  image: "image1.jpg",
                  description: "ShrimpLD-24 Infinium Array Genotyping"
                },
              ]
            }, {
              subcatname: "PET GENOTYPING",
              description: "Uncover the genetic mysteries of your beloved pets with our Pet Genotyping services, powered by Illumina Bead Arrays technology. At our cutting-edge facility, we offer comprehensive genetic analysis for both canines and felines.",
              products: [
                {
                  service: "Mols_Iscan_13",
                  price: 10,
                  image: "image1.jpg",
                  description: "Canine HD Array Genotyping"
                },
                {
                  service: "Mols_Iscan_14",
                  price: 10,
                  image: "image1.jpg",
                  description: "Feline 63K Array Genotyping"
                },
               
              ]
            }, {
              subcatname: "MOUSE ARRAYS",
              description: "Welcome to the forefront of scientific discovery with our Mouse Bead Arrays, including the GIGA MUGA and Methylation Array, powered by Illumina iScan technology. Our research services provide an invaluable resource for scientists.",
              products: [
                {
                  service: "Mols_Iscan_15",
                  price: 10,
                  image: "image1.jpg",
                  description: "GGP Mouse (GIGA-MUGA) Whole Genome Array "
                },
                {
                  service: "Mols_Iscan_16",
                  price: 10,
                  image: "image1.jpg",
                  description: "Mouse Methylation Infinium"
                },
                
              ]
            }, {
              subcatname: "HUMAN ARRAYS",
              description: "Experience the cutting-edge of human genomics and cytogenetics research with our Illumina Human Bead Arrays service. We empower scientists and researchers with comprehensive tools for population genomics, delving into the genetic diversity.", 
              products: [
                {
                  service: "Mols_Iscan_17",
                  price: 10,
                  image: "image1.jpg",
                  description: "Infinium Asian Screening Array"
                },
                {
                  service: "Mols_Iscan_18",
                  price: 10,
                  image: "image1.jpg",
                  description: "Infinium CytoSNP-850K v1.3 Array"
                },
                {
                  service: "Mols_Iscan_19",
                  price: 10,
                  image: "image1.jpg",
                  description: "HumanCytoSNP-12 v2.1 Array"
                },
                {
                  service: "Mols_Iscan_20",
                  price: 10,
                  image: "image1.jpg",
                  description: "Infinium Global Diversity Array with Carrier Screening Content-8 v2.0"
                },
                {
                  service: "Mols_Iscan_21",
                  price: 10,
                  image: "image1.jpg",
                  description: "Infinium Global Diversity Array with Cytogenetics-8"
                },
                {
                  service: "Mols_Iscan_22",
                  price: 10,
                  image: "image1.jpg",
                  description: "Infinium Global Diversity Array with Enhanced PGx"
                },
                {
                  service: "Mols_Iscan_23",
                  price: 10,
                  image: "image1.jpg",
                  description: "Infinium Global Diversity Array with Polygenic Risk Score Content-8 v1.0"
                },
                {
                  service: "Mols_Iscan_24",
                  price: 10,
                  image: "image1.jpg",
                  description: "Infinium Global Diversity Array"
                },
                {
                  service: "Mols_Iscan_25",
                  price: 10,
                  image: "image1.jpg",
                  description: "Infinium Global Screening Array with Cytogenetics-24"
                },
                {
                  service: "Mols_Iscan_26",
                  price: 10,
                  image: "image1.jpg",
                  description: "Infinium Global Screening Array v3.0"
                },
                {
                  service: "Mols_Iscan_27",
                  price: 10,
                  image: "image1.jpg",
                  description: "Infinium ImmunoArray"
                },
                {
                  service: "Mols_Iscan_28",
                  price: 10,
                  image: "image1.jpg",
                  description: "Infinium MethylationEPIC v2.0 Array"
                },
                {
                  service: "Mols_Iscan_29",
                  price: 10,
                  image: "image1.jpg",
                  description: "Infinium PsychArray"
                },
              ]
            },
          ]
        },
        // Add other categories here
      ];


  // Function to determine the href based on subcategory name
function getSubcategoryHref(subcategoryName) {
  switch (subcategoryName) {
    case 'SAMPLE ISOLATION':
      return '/SampleIsolationPage';
    case 'WHOLE GENOME SEQUENCING':
      return '/WholeGenomeSeqGen';
    case '16S METAGENOME SEQUENCING':
      return '/SMetagenomeSequencing';
    case 'ITS METAGENOME SEQUENCING':
      return '/ITSMetagenomeSequencing';
    case 'GENOTYPTING BY SEQUENCING': 
      return '/GenotypingbySequencing';
    case 'WHOLE GENOME SEQUENCING (de novo)':
      return '/WholeGenomeSequencing';
    case 'RNA SEQUENCING':
      return '/rnaSequencing';
    case 'METAGENOME SEQUENCING':
      return '/MetagenomeAnalysisPage';
    case 'META-TRANSCRIPTOME ANALYSIS':
      return 'MetaTranscriptomeAnalysisPage';
    case 'SMALL RNA SEQUENCING':
      return '/SmallRNASeqPage';
    case 'ChIP SEQUENCING':
      return '/ChIPSeqPage';
    case 'WHOLE GENOME RE-SEQUENCING':
      return '/WholeGenomeReSeqPage';
    case 'WHOLE EXOME ANALYSIS':
      return '/WholeExomeAnalysisPage';
    case 'BioCloud SERVICES':
      return '/BiocloudServicesPage';
    case 'AGRI GENOTYPING':
      return '/Agrigenotyping';
    case 'LIVESTOCK GENOTYPING':
      return '/LivestockGenotyping';
    case 'PET GENOTYPING':
      return '/PetGenotyping';
    case 'MOUSE ARRAYS':
      return '/MouseArrays';
    case 'HUMAN ARRAYS':
      return '/HumanArrays';
    default:
      return '/defaultSubpage';
  }
}

// Function to determine the icon based on category index
function getIconForCategory(categoryIndex) {
  switch (categoryIndex) {
    case 0:
      return (
        <Icon.ClipboardDataFill style={{ height: '70px', width: '70px', color: 'darkgreen' }} />
      );
    case 1:
      return (
        <Icon.BarChartLineFill style={{ height: '70px', width: '70px', color: 'gold' }} />
      );
    case 2:
      return (
        <Icon.FileEarmarkSpreadsheetFill style={{ height: '70px', width: '70px', color: 'darkblue' }} />
      );
    // Add more cases as needed for each category
    default:
      return <Icon />;
  }
}
function Market() {
    const paragraphStyle = { textAlign: 'justify', };
    const categoryNames = dataList.map(category => category.category);
    const subcategoryData = dataList.map(category => {
        const categoryData = {
          categoryName: category.category,
          subcategories: category.subcategories.map(subcategory => {
            return {
              subcategoryName: subcategory.subcatname,
              description: subcategory.description,
              products: subcategory.products.map(product => {
                return {
                  productName: product.service,
                  price: product.price,
                  image: product.image,
                  productDescription: product.description
                };
              })
            };
          })
        };
        return categoryData;
      });
      console.log(subcategoryData);
    return (
    <section className="team_member pt-4 fade-in">
      {/* Marketplace */}

      <div class="box bg-light">
        <div class="container-fluid">
          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner shadow p-3 mb-5 bg-white rounded mt-5">
            <div class="carousel-item active border border-white" data-bs-interval="3000">
            <img
                  src="https://static.wixstatic.com/media/2a386e_8ccbfe258a25486a9b2c962dad9f751a~mv2.png/v1/fill/w_1279,h_478,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/2a386e_8ccbfe258a25486a9b2c962dad9f751a~mv2.png"
                  class="w-100 h-80"
                  alt="..."
                />
              </div>
              <div class="carousel-item border border-white" data-bs-interval="3000">
                <img
                  src="https://static.wixstatic.com/media/2a386e_a506121d81164ee0ae85562f8082c9d9~mv2.png/v1/fill/w_1279,h_478,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/2a386e_a506121d81164ee0ae85562f8082c9d9~mv2.png"
                  class="w-100 h-80"
                  alt="..."
                />
              </div>
              <div class="carousel-item border border-white" data-bs-interval="3000">
                <img
                  src="https://static.wixstatic.com/media/2a386e_f5835bea47164a3885cc0dd2486943ee~mv2.png/v1/fill/w_1279,h_478,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/2a386e_f5835bea47164a3885cc0dd2486943ee~mv2.png"
                  class="w-100 h-80"
                  alt="..."
                />
              </div>
              <div class="carousel-item border border-white" data-bs-interval="3000">
                <img src={Flyres} class="w-100 h-80" alt="..."/>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div class="container">
          <div class="rows">
            <div class="col-lg-5">
              <div class="section-title">
                <h2>What We Provide</h2>
                <p class="mx-3">
                  Complete Solutions for Next-Generation Technologies !
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <a href="/OligosForm" target="_blank" class="btn">
                  <div class="icon">
                    <Icon.Activity
                      style={{ height: "80px", width: "80px", color: "gold" }}
                    />
                    {/* <img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="rounded-circle avatar-xs mx-3" style={{height: '100px',width: '100px'}} alt="" /> */}
                  </div>
                  <div class="feature-content mt-4">
                    <h5>OLIGOS SYNTHESIS SERVICES</h5>
                    <p style={paragraphStyle}>
                      Welcome to our premier Custom Oligo Synthesis Service,
                      your one-stop destination for tailor-made DNA and RNA
                      sequences. Our cutting-edge technology and expert
                      scientists ensure precise results.
                    </p>
                  </div>
                </a>
              </div>
            </div>
           
            {categoryNames.map((category, categoryIndex) => (
  <div key={categoryIndex}>
    <div className="section-title text-center">
      <h1 className="display-4 mt-5">{category}</h1>
    </div>
    <div className="row ">
    {subcategoryData[categoryIndex].subcategories.map((subdata, subIndex) => (
      <div className={`col-sm-6 col-lg-4  mb-5 feature-box-${categoryIndex + 1}`} key={subIndex}>
        <div>
        <a href={getSubcategoryHref(subdata.subcategoryName)} onClick={()=>{
              const data = subdata.products;
              console.log(data);
              const productString = JSON.stringify(data);
              localStorage.setItem('product',  productString); 
              // sessionStorage.setItem('product', productString);
            }} target="_blank" className="btn">
              <div className="icon">
              {getIconForCategory(categoryIndex)}
              </div>
              <div className="feature-content mt-4">
                <h5>{subdata.subcategoryName}</h5>
                <p class="mt-3" style={paragraphStyle}>{subdata.description}</p>
              </div>
            </a>
        </div>
      </div>
    ))}
    </div>
  </div>
))}

            {/* card end here */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Market;
