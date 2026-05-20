import React from "react";
import { Timeline } from "../components/ui/Timeline.jsx";
import Footer from "../components/layout/Footer";

const itemClasses = "text-lg font-clash font-semibold mb-2 text-black dark:text-white";
const listClasses = "list-disc ml-5 font-satoshi space-y-3 md:space-y-4 text-sm md:text-base text-neutral-800 dark:text-neutral-200 lg:max-w-2xl";

function ExperiencePage() {
  const data = [
    {
      title: "Feb 2025 - Present",
      content: (
        <div>
          <h4 className={itemClasses}>Bank of America - Data Engineer</h4>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-cyan-800 dark:text-sky-200">
            Azure Data Factory | Synapse Analytics | ADLS Gen2 | PySpark | SQL | Power BI | Azure Key Vault
          </p>
          <ul className={listClasses}>
            <li>Architected end-to-end Azure Data Factory pipelines consolidating data from 10+ upstream systems into Azure Data Lake Gen2, reducing data onboarding time by 60%.</li>
            <li>Built scalable PySpark and SQL transformations in Azure Synapse to automate curated credit-risk reporting datasets.</li>
            <li>Designed Synapse warehouse tables for utilization ratio, days past due, payment trends, and portfolio segmentation.</li>
            <li>Optimized ETL performance with partition-based processing, incremental loads, and query tuning, improving SLA adherence by 35%.</li>
            <li>Developed Power BI dashboards for portfolio health, delinquency movement, and early warning indicators for high-risk customer segments.</li>
            <li>Enforced PII masking, RBAC, and Azure Key Vault secret management to support SOX and internal banking governance standards.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Aug 2021 - Dec 2022",
      content: (
        <div>
          <h4 className={itemClasses}>Accenture - Data Engineer</h4>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-cyan-800 dark:text-sky-200">
            Databricks | PySpark | SQL | Azure Data Factory | Azure SQL | Delta Lake | Power BI
          </p>
          <ul className={listClasses}>
            <li>Engineered ADF pipelines aggregating HR data from 25+ global regions, reducing reporting turnaround from three days to under six hours.</li>
            <li>Tuned PySpark jobs in Databricks with partition pruning and intelligent caching, reducing notebook runtime by 67%.</li>
            <li>Optimized Azure SQL queries using filtered indexes and execution plan analysis, cutting dashboard response time from 20+ seconds to under 7 seconds.</li>
            <li>Automated daily incremental Power BI dataset refreshes through ADF integration, eliminating manual intervention across compliance dashboards.</li>
            <li>Consolidated Oracle, SAP, and Snowflake data into unified reporting datasets for 25,000+ employees with consistent KPI definitions.</li>
            <li>Built a PySpark data comparison framework that reduced QA effort by 70% and achieved 100% reconciliation accuracy during UAT.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Jul 2019 - Aug 2021",
      content: (
        <div>
          <h4 className={itemClasses}>Tata Consultancy Services - Data Engineer</h4>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-cyan-800 dark:text-sky-200">
            AWS Glue | SparkSQL | Amazon Redshift | AWS Kinesis | Terraform | Apache Airflow
          </p>
          <ul className={listClasses}>
            <li>Processed 100M+ records daily using AWS Glue, SparkSQL, and Redshift, improving data availability and reducing pipeline latency by 40%.</li>
            <li>Integrated AWS Kinesis streams with EMR clusters for sub-minute event monitoring, reducing manual analyst review time by 30%.</li>
            <li>Developed reusable Terraform IaC templates for AWS Lambda, IAM, and S3, cutting environment provisioning time by 50%.</li>
            <li>Maintained and monitored 20+ Apache Airflow DAGs with automated retries, logging, and alerting to ensure on-time downstream delivery.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip bg-[#f5f3ee] dark:bg-[#080b0f]">
      <Timeline data={data} />
      <Footer />
    </div>
  );
}

export default ExperiencePage;
