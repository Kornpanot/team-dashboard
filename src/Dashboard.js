import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from './components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { User, Users, BarChart, Zap, FileText, Target, ShieldCheck, TrendingUp } from 'lucide-react';

const ResponsibilityCard = ({ title, members, details }) => (
  <Card className="mb-4">
    <CardHeader className="font-bold">{title}</CardHeader>
    <CardContent>
      <p className="mb-2"><strong>Team:</strong> {members}</p>
      <ul className="list-disc pl-5">
        {Object.entries(details).map(([key, value]) => (
          <li key={key}><strong>{key}:</strong> {value}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('analysis');

  const responsibilities = {
    analysis: [
      {
        title: "1. Market and Competitor Analysis",
        members: "Lead: K.Keng, K.Bum. Support: K.Meaw, K.Aum",
        details: {
          "What": "Gather and analyze market data, industry trends, and competitor strategies",
          "Where": "In office, may travel to trade shows or relevant seminars",
          "With whom": "Work with team, consultants, and may interview customers or industry experts",
          "Equipment": "Computer, data analysis software like SPSS, industry databases",
          "When": "Quarterly analysis and continuous data updates",
          "How": "Use SWOT analysis, Porter's Five Forces, and quantitative and qualitative research techniques"
        }
      },
      {
        title: "2. Technology Trend Monitoring",
        members: "Lead: K.Keng, K.Bum. Support: K.Meaw, K.Aum",
        details: {
          "What": "Study and analyze new technologies in jig, fixture, and SMT industries",
          "Where": "In office, technology seminars, or factory visits",
          "With whom": "Work with team or suppliers",
          "Equipment": "Databases, technology trend tracking tools like Gartner or Forrester",
          "When": "Continuous monitoring with quarterly summary reports",
          "How": "Attend technology shows, read research articles, exchange knowledge with engineering team"
        }
      }
    ],
    strategy: [
      {
        title: "3. Marketing Strategy Development",
        members: "Lead: K.Keng, K.Bum. Support: K.Meaw, K.Aum",
        details: {
          "What": "Create and improve short-term and long-term marketing plans",
          "Where": "In office and possibly off-site meetings",
          "With whom": "Work with executives, sales team, and product development department",
          "Equipment": "Strategy planning software like Miro, Asana, or whiteboard",
          "When": "Annually with quarterly reviews",
          "How": "Meetings, market data analysis, and use of various strategic planning techniques"
        }
      },
      {
        title: "4. Budget Management",
        members: "Lead: K.Keng, K.Bum. Support: K.Meaw, K.Aum",
        details: {
          "What": "Plan, allocate, and control sales and marketing budget",
          "Where": "In office or remote meetings",
          "With whom": "Work with finance department and senior management",
          "Equipment": "Budget planning software like SAP or Oracle Financials",
          "When": "Annual budget planning with quarterly reviews",
          "How": "Analyze past expenses, forecast market trends, and use zero-based budgeting"
        }
      }
    ],
    content: [
      {
        title: "5. Marketing Content Development",
        members: "Lead: K.Meaw, K.Aum. Support: K.Keng, K.Bum",
        details: {
          "What": "Create technical documents, articles, and content",
          "Where": "In office or remote work",
          "With whom": "Product experts, QMR",
          "Equipment": "Design software like Adobe Creative Suite, content writing tools",
          "When": "Continuously throughout the year, as changes occur",
          "How": "Brainstorming meetings, use of SEO techniques"
        }
      }
    ],
    teamDevelopment: [
      {
        title: "6. Sales and Marketing Team Development",
        members: "Everyone",
        details: {
          "What": "Organize training, provide guidance, and evaluate team performance",
          "Where": "Company training room or external training",
          "With whom": "External trainers and HR department",
          "Equipment": "Learning Management System (LMS)",
          "When": "Monthly training and annual performance reviews",
          "How": "Use 70-20-10 teaching technique (learning from experience, coaching, and classroom training)"
        }
      }
    ],
    sales: [
      {
        title: "7. Sales Channel Management",
        members: "Lead: K.Meaw, K.Aum. Support: K.Keng, K.Bum",
        details: {
          "What": "Develop and manage networks and partnerships",
          "Where": "In office and may involve travel",
          "With whom": "Business partners and team",
          "Equipment": "Partner Relationship Management (PRM) system",
          "When": "Quarterly and annually",
          "How": "Create partner plans and networks, and establish incentive systems"
        }
      },
      {
        title: "8. Customer Relationship Building and Maintenance",
        members: "Lead: K.Keng, K.Bum. Support: K.Meaw, K.Aum",
        details: {
          "What": "Meet customers, present products, and provide after-sales service",
          "Where": "At customer companies or meetings",
          "With whom": "Corporate customers (purchasing, users)",
          "Equipment": "Presentation media, product samples, CRM software like Salesforce",
          "When": "Throughout the year, plan customer visits and follow up regularly",
          "How": "Meetings, phone calls, send emails and information"
        }
      },
      {
        title: "9. Product and Service Presentation",
        members: "Lead: K.Keng, K.Bum. Support: K.Meaw, K.Aum",
        details: {
          "What": "Present products and services",
          "Where": "At customer companies or via video conferencing",
          "With whom": "Customers (users or purchasing)",
          "Equipment": "Presentation media (brochures, product samples, or company profile media)",
          "When": "As scheduled with customers",
          "How": "Use solution selling techniques, focusing on solving customer problems"
        }
      },
      {
        title: "10. Negotiation and Closing Sales",
        members: "Lead: K.Keng, K.Bum, K.Meaw. Support: K.Aum",
        details: {
          "What": "Negotiate terms, prices, and agreements",
          "Where": "Customer companies or through communication tools",
          "With whom": "Customer decision-makers",
          "Equipment": "Communication tools",
          "When": "During the sales process",
          "How": "Use win-win negotiation techniques, present various options"
        }
      }
    ],
    productDevelopment: [
      {
        title: "11. Product Research and Development",
        members: "Lead: K.Keng, K.Bum. Support: K.Meaw, K.Aum",
        details: {
          "What": "Gather customer requirements and provide information to engineering team",
          "Where": "In office and may involve customer visits",
          "With whom": "Engineering team, R&D department, and customers",
          "Equipment": "Project management software like Jira, customer survey tools",
          "When": "Annually or according to strategic plan",
          "How": "Hold meetings with engineering team, conduct customer surveys"
        }
      }
    ],
    qualityManagement: [
      {
        title: "12. ISO9001:2015 Quality Management System",
        members: "Lead: K.Meaw, K.Aum. Support: K.Keng, K.Bum",
        details: {
          "What": "Audit and improve work processes to comply with ISO standards",
          "Where": "In office",
          "With whom": "QMR, IQA, and external Auditor",
          "Equipment": "Document management software, compliance tracking system",
          "When": "Internal audit annually and annual external audit",
          "How": "Work in compliance with ISO standards"
        }
      }
    ],
    reporting: [
      {
        title: "13. Performance Analysis and Reporting",
        members: "Lead: K.Meaw, K.Aum. Support: K.Keng, K.Bum",
        details: {
          "What": "Collect data, analyze KPIs, and prepare performance reports",
          "Where": "In office",
          "With whom": "Work with team and management",
          "Equipment": "Data analysis software like Power BI, Tableau, or Excel",
          "When": "Prepare monthly, quarterly, and annual reports",
          "How": "Extract data from CRM system, analyze trends, and present in dashboard format"
        }
      }
    ],
    riskManagement: [
      {
        title: "14. Business Risk Management",
        members: "Lead: K.Keng, K.Bum. Support: K.Meaw, K.Aum",
        details: {
          "What": "Identify, assess, and plan management of sales and marketing-related risks",
          "Where": "In office",
          "With whom": "Work with management and consultants",
          "Equipment": "Risk management software",
          "When": "Annually",
          "How": "Use PESTEL risk analysis technique and Monte Carlo simulation to assess impact"
        }
      }
    ]
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Team Responsibilities Dashboard</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 gap-4 mb-4">
          <TabsTrigger value="analysis" className="flex items-center"><BarChart className="mr-2" />Analysis</TabsTrigger>
          <TabsTrigger value="strategy" className="flex items-center"><Target className="mr-2" />Strategy</TabsTrigger>
          <TabsTrigger value="content" className="flex items-center"><FileText className="mr-2" />Content</TabsTrigger>
          <TabsTrigger value="teamDevelopment" className="flex items-center"><Users className="mr-2" />Team Development</TabsTrigger>
          <TabsTrigger value="sales" className="flex items-center"><TrendingUp className="mr-2" />Sales</TabsTrigger>
          <TabsTrigger value="productDevelopment" className="flex items-center"><Zap className="mr-2" />Product Development</TabsTrigger>
          <TabsTrigger value="qualityManagement" className="flex items-center"><ShieldCheck className="mr-2" />Quality Management</TabsTrigger>
          <TabsTrigger value="reporting" className="flex items-center"><BarChart className="mr-2" />Reporting</TabsTrigger>
        </TabsList>
        {Object.entries(responsibilities).map(([key, value]) => (
          <TabsContent key={key} value={key}>
            {value.map((responsibility, index) => (
              <ResponsibilityCard key={index} {...responsibility} />
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Dashboard;