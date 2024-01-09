import { MissingParamError } from '@app/errors/MissingParamError';
import { HttpRequest } from '@app/protocols/http';
import Supplie from './supplie';

describe('Supplie', () => {
  const makeSut = (props: HttpRequest) => {
    const newSupplie = new Supplie(props.body);

    return newSupplie;
  };

  it('should throw missing error param if none name is provided', () => {
    const httpRequest = {
      body: {
      logo: "any_string",
      stateAbbreviation: "sp",
      costPerKwh: 3,
      minKwhLimit: 3,
      totalCustomers: 3,
      averageCustomerRating: 3,
      },
    };

    expect(() => makeSut(httpRequest)).toThrow(new MissingParamError('name')); 
})

  it('should throw missing error param if none logo is provided', () => {
    const httpRequest = {
      body: {
      name: "any_string",
      stateAbbreviation: "sp",
      costPerKwh: 3,
      minKwhLimit: 3,
      totalCustomers: 3,
      averageCustomerRating: 3,
      },
    };

    expect(() => makeSut(httpRequest)).toThrow(new MissingParamError('logo')); 
})

  it('should throw missing error param if none stateAbbreviation is provided', () => {
    const httpRequest = {
      body: {
      name: "any_string",
      logo: "any_string",
      costPerKwh: 3,
      minKwhLimit: 3,
      totalCustomers: 3,
      averageCustomerRating: 3,
      },
    };

    expect(() => makeSut(httpRequest)).toThrow(new MissingParamError('stateAbbreviation')); 
})

  it('should throw missing error param if none costPerKwh is provided', () => {
    const httpRequest = {
      body: {
      name: "any_string",
      logo: "any_string",
      stateAbbreviation: "sp",
      minKwhLimit: 3,
      totalCustomers: 3,
      averageCustomerRating: 3,
      },
    };

    expect(() => makeSut(httpRequest)).toThrow(new MissingParamError('costPerKwh')); 
})

  it('should throw missing error param if none minKwhLimit is provided', () => {
    const httpRequest = {
      body: {
      name: "any_string",
      logo: "any_string",
      stateAbbreviation: "sp",
      costPerKwh: 3,
      totalCustomers: 3,
      averageCustomerRating: 3,
      },
    };

    expect(() => makeSut(httpRequest)).toThrow(new MissingParamError('minKwhLimit')); 
})

  it('should throw missing error param if none totalCustomers is provided', () => {
    const httpRequest = {
      body: {
      name: "any_string",
      logo: "any_string",
      stateAbbreviation: "sp",
      costPerKwh: 3,
      minKwhLimit: 3,
      averageCustomerRating: 3,
      },
    };

    expect(() => makeSut(httpRequest)).toThrow(new MissingParamError('totalCustomers'));
});
  
    it('should throw missing error param if none averageCustomerRating is provided', () => {
      const httpRequest = {
        body: {
        name: "any_string",
        logo: "any_string",
        stateAbbreviation: "sp",
        costPerKwh: 3,
        minKwhLimit: 3,
        totalCustomers: 3,
        },
      };
  
      expect(() => makeSut(httpRequest)).toThrow(new MissingParamError('averageCustomerRating'));
  });
  
    it('should return a new supplie if all params are provided', () => {
      const httpRequest = {
        body: {
        name: "any_string",
        logo: "any_string",
        stateAbbreviation: "sp",
        costPerKwh: 3,
        minKwhLimit: 3,
        totalCustomers: 3,
        averageCustomerRating: 3,
        },
      };
  
      const newSupplie = makeSut(httpRequest)
  
      expect(newSupplie.props).toEqual({
        averageCustomerRating: httpRequest.body.averageCustomerRating,
        costPerKwh: httpRequest.body.costPerKwh,
        logo: httpRequest.body.logo,
        minKwhLimit: httpRequest.body.minKwhLimit,
        name: httpRequest.body.name,
        stateAbbreviation: httpRequest.body.stateAbbreviation,
        totalCustomers: httpRequest.body.totalCustomers,
      });
    });
  });
