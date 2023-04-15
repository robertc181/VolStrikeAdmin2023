const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
  serve: {
    type: String,
  },
  person: {
    type: String,
  },
  fullName: {
    type: String,
  },
  phone: {
    type: String,
  },
  emailAddress: {
    type: String,
  },
  authority: {
    type: String,
  },
  companyName: {
    type: String,
  },
  croNumber: {
    type: String,
  },
  nameChanged: {
    type: String,
  },
  previousCompanyName: {
    type: String,
  },
  tradingAs: {
    type: String,
  },
  registeredBusName: {
    type: String,
  },
  registeredAddress1: {
    type: String,
  },
  registeredAddress2: {
    type: String,
  },
  registeredRegion: {
    type: String,
  },
  registeredCity: {
    type: String,
  },
  registeredPostalCode: {
    type: String,
  },
  registeredCountry: {
    type: String,
  },
  registeredOffice: {
    type: String,
  },
  prevAddress1: {
    type: String,
  },
  prevAddress2: {
    type: String,
  },
  prevRegion: {
    type: String,
  },
  prevCity: {
    type: String,
  },
  prevPostalCode: {
    type: String,
  },
  prevCountry: {
    type: String,
  },
  difAdress: {
    type: String,
  },
  busAddress1: {
    type: String,
  },
  busAddress2: {
    type: String,
  },
  busRegion: {
    type: String,
  },
  busCity: {
    type: String,
  },
  busPostalCode: {
    type: String,
  },
  busCountry: {
    type: String,
  },
  previouslyTraded: {
    type: String,
  },
  ceasedTradingDate: {
    type: String,
  },
  letterOfNoObjection: {
    type: String,
  },
  letterAssistance: {
    type: String,
  },
  taxesPaid: {
    type: String,
  },
  registeredForTaxes: {
    type: String,
  },
  companyTaxNumber: {
    type: String,
  },
  deRegistered: {
    type: String,
  },
  taxReturnSubmitted: {
    type: String,
  },
  companyNoLongerTrading: {
    type: Boolean,
  },
  returnsUpToDate: {
    type: Boolean,
  },
  assetsExceed150: {
    type: Boolean,
  },
  liabilitiesExceed150: {
    type: Boolean,
  },
  ongoingLitigation: {
    type: Boolean,
  },
  strikeOffByFirstName: {
    type: String,
  },
  strikeOffByLastname: {
    type: String,
  },
  strikeOffBy: {
    type: String,
  },
  tandcAgreed: {
    type: Boolean,
  },
  unid: {
    type: String,
  },
  processed: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Request", RequestSchema);
