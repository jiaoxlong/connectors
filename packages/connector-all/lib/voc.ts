import { createUriAndTermNamespace } from "@treecg/types";

export const CONN = createUriAndTermNamespace("https://w3id.org/conn#",
  'WsReaderChannel', 'WsWriterChannel', 'HttpReaderChannel', 'HttpWriterChannel', 'FileReaderChannel', 'FileWriterChannel', 'KafkaWriterChannel', 'KafkaReaderChannel',
  'wsPort', 'wsUri', 'filePath', 'fileOnReplace', 'fileReadFirstContent', "fileEncoding",
  'httpPort', 'httpMethod', 'httpEndpoint', 'kafkaTopic', 'kafkaBroker', 'kafkaFromBeginning', 'kafkaGroup');

