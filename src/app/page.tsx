/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Feature from './feature'
import { ArrowUpDown, Timer, Workflow } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8 w-full items-center text-center gap-12">
      {/* Hero Section */}
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
        Buy Back Your Time: Automate with Vindael's AI Solutions
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
        Schedule a free consultation to discover how our AI solutions can save your business thousands of hours annually. Transform your operations, cut routine tasks by 40%, and optimize efficiency with Vindael's tailored automation tools.        </Typography>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfAYP1LvpIG3deIm6ozsMDmY8LTCMYVNLoyJ3T8_vBcPAYWkg/viewform?usp=sf_link" passHref>
          <Button size="tiny" variant="ghost">
            Free Consultation
          </Button>
        </Link>
      </div>

      {/* Crm system section */}
      <div className="flex flex-col gap-6 items-center">
      <Typography className="max-w-2xl" variant="h1">
        Vindael AI-Powered CRM Automation System
      </Typography>
      <Typography className="max-w-2xl" variant="h4">
        Revolutionize Your Customer Relationship Management (Save 1000s of Hours)
      </Typography>
      <Typography className="max-w-2xl" variant="p">
        Welcome to Vindael, your AI automation experts for CRM systems. We transform how businesses manage customer relationships. We create or supercharge existing CRM platforms with powerful AI automations. Imagine automatic follow-ups, smart lead assignments, and seamless client conversions – all working 24/7. Whether you're using HubSpot, Salesforce, Monday.com or ClickUp, our AI-Automations integrates seamlessly.
      </Typography>
      <div className="w-full max-w-2xl">
        <video width="100%" controls>
          <source src="/videos/crm_automation_demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Typography className="max-w-2xl" variant="h4">
        Transform Your CRM with AI:
      </Typography>
      <div className="max-w-2xl">
        <ul>
          <li><b>Intelligent Lead Management:</b> Automatically capture, score, and nurture leads across multiple channels.</li>
          <li><b>Seamless Deal Closure and Onboarding:</b> Automate client assignments, task creation, and meeting scheduling.</li>
          <li><b>AI-Powered Follow-ups:</b> Never miss an opportunity with smart, timely reminders for inactive leads.</li>
          <li><b>Cross-Platform Integration:</b> Seamlessly connect your CRM with social media platforms for comprehensive customer insights.</li>
          <li><b>Game-Changing Proposal Generator:</b> Analyzes data, crafts structure, generates content, and delivers personalized, professional proposals in seconds.</li>
          <li><b>Live Transaction Service:</b> Analyzes conversations in real-time, instantly creating follow-ups, proposals, and CRM updates as soon as the call ends.</li>
        </ul>
      </div>
      <Typography className="max-w-2xl" variant="p">
        At Vindael, we're not replacing your favorite tools – we're making them smarter. Let us revolutionize your CRM with AI, boost productivity, and accelerate your business growth.
      </Typography>
      <Typography className="max-w-2xl" variant="h5">
        From $4,000 setup, $75/month. First 2 months free for new clients.
      </Typography>
      <Link href="https://cal.com/vindael-automations-sqnjwm/15min?date=2024-07-23&month=2024-07" passHref>
        <Button size="tiny" variant="ghost">
          Schedule Your Free Consultation
        </Button>
      </Link>
    </div>
    {/* Email System Section */}
    <div className="flex flex-col gap-6 items-center">
      <Typography className="max-w-2xl" variant="h1">
        Vindael AI-Enhanced Email Automation System
      </Typography>
      <Typography className="max-w-2xl" variant="h4">
        Supercharge Your Email Communications (Reclaim 1000+ Hours Annually)
      </Typography>
      <Typography className="max-w-2xl" variant="p">
        This is an example of our Vindael Email System. This demonstration showcases clients receiving an automated email immediately after completing the onboarding form. This is just a glimpse of our system's capabilities. Our objective is to seamlessly integrate these solutions into your existing workflows.
      </Typography>
      <div className="w-full max-w-2xl">
        <video width="100%" controls>
          <source src="/videos/email_automation_demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Typography className="max-w-2xl" variant="h4">
        Transform Your Email Workflow:
      </Typography>
      <div className="max-w-2xl">
        <ul>
          <li><b>Smart Response Generation (Improve Resolution Rates by 30%):</b> AI-powered responses to customer inquiries, ensuring quick and accurate replies.</li>
          <li><b>Automated Onboarding Sequences (Boost Client Retention by 25%):</b> Create personalized email series for new clients, integrating with your CRM and calendar.</li>
          <li><b>Intelligent Priority Inbox (Save 2 Hours Daily):</b> AI-driven email sorting and prioritization to focus on what matters most.</li>
          <li><b>Advanced Email Analytics (Data-Driven Communication Strategy):</b> Gain insights into email performance and recipient engagement.</li>
          <li><b>Cross-Platform Notifications (Never Miss Critical Messages):</b> Receive instant alerts for important emails via SMS or other preferred channels.</li>
        </ul>
      </div>
      <Typography className="max-w-2xl" variant="p">
        This is just a snapshot of our email automation capabilities. We customize our AI-powered system to match your specific communication needs, whether you're in customer service, sales, marketing, or any other field.
      </Typography>
      <Typography className="max-w-2xl" variant="h5">
        From $1,000 setup, $75/month. First 2 months free for new clients.
      </Typography>
      <Link href="https://cal.com/vindael-automations-sqnjwm/15min?date=2024-07-23&month=2024-07" passHref>
        <Button size="tiny" variant="ghost">
          Transform Your Email Management
        </Button>
      </Link>
    </div>

      {/* Quick Solutions Section */}
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Quick Solutions, Less Stress
        </Typography>
        <div className="flex md:flex-row flex-col gap-12">
          <Feature
            icon={<Timer size={24} />}
            headline="Speed Up Operations"
            description="Automate repetitive tasks to save hours every week, so you can focus on what matters most."
          />
          <Feature
            icon={<ArrowUpDown size={24} />}
            headline="Seamless Integrations"
            description="Our AI tools connect effortlessly with your existing systems, ensuring smooth workflows."
          />
          <Feature
            icon={<Workflow size={24} />}
            headline="Simplify Complex Processes"
            description="Automate complex tasks to simplify your operations and boost efficiency."
          />
        </div>
        <Typography className="max-w-2xl" variant="p">
        At Vindael, our mission is to save you time by leveraging cutting-edge AI tools tailored to your business needs. Once onboarded, we handle the setup and management, ensuring minimal sharing of sensitive data like passwords. This empowers you to stay in control while we provide a seamless, efficient experience. Our bespoke solutions optimize your processes without deeply intruding into your operations. Contact us today to discover how Vindael's AI systems can transform your business.        </Typography>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col gap-6 items-center" id="contact">
        <Typography className="max-w-2xl" variant="h1">
          Get in Touch
        </Typography>
        <Typography className="max-w-2xl" variant="p">
          Book a demo or hop on a call to discover how our AI solutions can transform your business.
        </Typography>
        <Link href="mailto:contact@vindael.com" passHref>
          <Button size="tiny" variant="ghost">
            Free Consultation
          </Button>
        </Link>
      </div>
    </div>
  )
}
