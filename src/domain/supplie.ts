import { InvalidParamError } from '@app/errors/InvalidParamError';
import { MissingParamError } from '@app/errors/MissingParamError';
import { z } from 'zod';

interface SupplieCreationProps {
  id?: string;
  name: string;
  logo: string;
  stateAbbreviation: string;
  costPerKwh: number;
  minKwhLimit: number;
  totalCustomers: number;
  averageCustomerRating: number;
}

interface SupplieProps extends SupplieCreationProps {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface NewSupplie {
  body: SupplieCreationProps;
  statusCode: number;
}

interface IsValidMethodReturn {
  isValid: boolean;
  body: any;
  statusCode: number;
}

export class Supplie {
  props: SupplieProps;

  constructor(props: SupplieProps) {
    const { ...supplieProps } = props;
    const newSupplie = this.handle(supplieProps);

    if (newSupplie.statusCode >= 300) {
      throw newSupplie.body;
    }
    this.props = {
      ...newSupplie.body,
    };
  }

  private handle(props: SupplieCreationProps): NewSupplie {
    const { isValid, body, statusCode } = this.isValid(props);

    if (!isValid) {
      return {
        body: body,
        statusCode: statusCode,
      };
    }

    return {
      body: props,
      statusCode: 200,
    };
  }

  private isValid(params: SupplieCreationProps): IsValidMethodReturn {
    const supplieSchema = z.object({
      name: z.string().min(3, { message: 'Invalid' }).max(255),
      logo: z.string().min(3, { message: 'Invalid' }).max(255),
      stateAbbreviation: z.string().min(2, { message: 'Invalid' }).max(2),
      costPerKwh: z.number().min(0, { message: 'Invalid' }),
      minKwhLimit: z.number().min(0, { message: 'Invalid' }),
      totalCustomers: z.number().min(0, { message: 'Invalid' }),
      averageCustomerRating: z.number().min(0, { message: 'Invalid' }),
    });

    const supplieIsValid = supplieSchema.safeParse(params);
    if (!supplieIsValid.success) {
      const errorPath = supplieIsValid.error.issues[0].path[0].toString();
      const errorMessage = supplieIsValid.error.issues[0].message;
      const errorBody =
        errorMessage === 'Invalid'
          ? new InvalidParamError(errorPath)
          : new MissingParamError(errorPath);

      return {
        isValid: false,
        body: errorBody,
        statusCode: 400,
      };
    }
    return {
      isValid: true,
      body: null,
      statusCode: 200,
    };
  }
}
export default Supplie;
