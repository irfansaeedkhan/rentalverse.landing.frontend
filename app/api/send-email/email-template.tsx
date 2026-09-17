import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
} from "@react-email/components";

interface EmailProps {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const EmailTemplate = ({ fullName, email, phone, message }: EmailProps) => (
  <Html>
    <Head />
    <Preview>Contact Us Form Submission</Preview>
    <Body>
      <Container>
        <Heading>Contact Us Form Submission</Heading>
        <Text>
          <strong>Name:</strong> {fullName}
        </Text>
        <Text>
          <strong>Email:</strong> {email}
        </Text>
        <Text>
          <strong>Phone:</strong> {phone}
        </Text>
        <Text>
          <strong>Message:</strong> {message}
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;
