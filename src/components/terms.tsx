import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TermsProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Terms({ open, setOpen }: TermsProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-96" style={{ overflow: "scroll" }}>
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <ol>
            <li>
              <strong>Acceptance of Terms:</strong> By accessing or using
              Spotifi, our music streaming platform, you agree to comply with
              and be bound by these Terms of Service.
            </li>

            <li>
              <strong>Use of the Platform:</strong> You must be at least 18
              years old to use Spotifi. You are responsible for ensuring the
              accuracy of the information you provide. Any misuse or
              unauthorized access may result in the termination of your account.
            </li>

            <li>
              <strong>Music Streaming:</strong> When streaming music through
              Spotifi, you agree to provide accurate and current information,
              including payment details. We are not responsible for any errors
              or disruptions caused by incorrect information.
            </li>

            <li>
              <strong>Payment:</strong> Payments made through Spotifi are
              processed securely. By using Spotifi, you agree to the terms and
              conditions of our payment processor. We do not store your payment
              information.
            </li>

            <li>
              <strong>Cancellation and Refunds:</strong> Subscription
              cancellations and refunds through Spotifi are subject to the
              policies outlined by the platform. We facilitate communication
              between you and the service provider but are not responsible for
              the outcome of these transactions.
            </li>

            <li>
              <strong>User Conduct:</strong> You agree not to use Spotifi for
              any unlawful or prohibited purpose. Any violation of these terms
              may result in the termination of your account.
            </li>

            <li>
              <strong>Intellectual Property:</strong> All content on Spotifi,
              including logos, trademarks, and text, is the property of Spotifi
              or its licensors. You may not use, reproduce, or distribute any
              content without permission.
            </li>

            <li>
              <strong>Privacy:</strong> We respect your privacy. Our Privacy
              Policy outlines how we collect, use, and protect your personal
              information.
            </li>

            <li>
              <strong>Disclaimer:</strong> Spotifi is provided "as is" without
              any warranties, expressed or implied. We do not guarantee the
              accuracy, reliability, or availability of Spotifi.
            </li>

            <li>
              <strong>Changes to Terms:</strong> We reserve the right to update
              or modify these Terms of Service for Spotifi at any time.
              Continued use of Spotifi after changes constitutes acceptance of
              the modified terms.
            </li>

            <li>
              <strong>Termination:</strong> We may terminate or suspend your
              Spotifi account at our discretion, without notice, for any conduct
              that we believe violates these Terms of Service or is harmful to
              other users or us.
            </li>

            <li>
              <strong>Contact Information:</strong> For questions or concerns
              regarding these terms, please contact us at{" "}
              <a href="mailto:info@spotifi.nl">info@spotifi.nl</a>.
            </li>
          </ol>
        </DialogDescription>
        <DialogFooter>
          <Button type="button" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
