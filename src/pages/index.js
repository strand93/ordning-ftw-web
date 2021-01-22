import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import HeaderImage from '../images/header.jpg'
import ProfileImage from '../images/profil.jpg'

export default () => (
  <Layout>
    <section className="pt-20 lg:pt-28">
      <div className="container mx-auto px-8 lg:flex justify-center items-center">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-none font-semibold">
            Organiserar, rensar, fixar åt företag och privatpersoner.
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Älskar kaos. Eller alltså. Att fixa kaoset.
          </p>
          {/*
          <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button>
          </p>
          <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>
          */}
        </div>
        <div className="lg:w-1/3 shadow-2xl pt-6">
        {/* <HeroImage /> */}
          <img src={HeaderImage} alt="Header image" className="rounded-lg"/>
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Våra tjänster</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Organisera</p>
              <p className="mt-4">
                Vi/jag hälper dig med att organisera...
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Rensa och sälja</p>
              <p className="mt-4">
                Har du mycket saker du vill sälja?...
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Fixa</p>
              <p className="mt-4">
                Fixa allt från ...
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Design And Plan Your Business Growth Steps
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="about-me" className="text-center">
    <h2 className="text-3xl lg:text-5xl font-semibold">Om mig</h2>
        <div className="container md:flex items-center mx-auto">
          <div className="flex-none justify-self-center w-64 h-64 m-4">
            <img className="object-scale-down rounded-full" src={ProfileImage} alt="Profile image"/>
          </div>
          <div className="flex-1 w-96 mx-4 my-20 py-24 bg-gray-200 rounded-lg text-center shadow-xl">
            <p className="font-mono text-gray-700">Lite text om mig här ..... Lorem Ipsum...</p>
            </div>
      </div>
    </section>
    {/*<section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>*/}
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">Kund omdömen</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="contact" className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Vill du ha min hjälp?</h3>
      <p className="mt-8 text-xl font-light">
        Hör av dig till mig!
      </p>
      <p className="mt-8 font-light text-opacity-25">
        organisera@ordning.ftw
      </p>
      <p className="mt-8">
        <Button size="xl">Maila</Button>
      </p>
    </section>
  </Layout>
);
