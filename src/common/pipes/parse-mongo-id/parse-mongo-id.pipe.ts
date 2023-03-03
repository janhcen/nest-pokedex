import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';
import { clearConfigCache } from 'prettier';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {

  transform(value: string, metadata: ArgumentMetadata) {
    if ( !isValidObjectId( value ) )
      throw new BadRequestException(`${ value } is not a valid MongoID`);

    return value;
  }

}
