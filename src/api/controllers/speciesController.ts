import {MessageResponse} from '../../types/Messages';
import {Species} from '../../types/Species';

type DBMessageResponse = MessageResponse & {
  data: Species;
};
