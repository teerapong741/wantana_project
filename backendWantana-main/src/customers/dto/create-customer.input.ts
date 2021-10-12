import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCustomerInput {
  @Field(() => Int)
  idCard: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  address: string;

  @Field()
  phoneNumber: string;

  @Field()
  lineId: string;

  @Field()
  email: string;

  
}
