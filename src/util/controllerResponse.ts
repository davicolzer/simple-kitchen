import { APIGatewayProxyResult } from 'aws-lambda';

interface IResponse<T> {
  statusCode: number;
  body: { message: string; data: T };
  replacer?: (string | number)[] | null;
  space?: string | number;
}

export function controllerResponse<T>({
  statusCode,
  body,
  replacer = null,
  space = 2,
}: IResponse<T>): APIGatewayProxyResult {
  return {
    statusCode,
    body: JSON.stringify({ statusCode, ...body }, replacer, space),
  };
}
