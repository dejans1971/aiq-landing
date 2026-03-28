export default async function handler(req, res) {
	  if (req.method !== 'POST') return res.status(405).end();
	  
	  const { email } = req.body;
	  if (!email) return res.status(400).json({ error: 'Email required' });

	  const response = await fetch('https://api.resend.com/emails', {
		      method: 'POST',
		      headers: {
			            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
			            'Content-Type': 'application/json'
			          },
		      body: JSON.stringify({
			            from: 'AIQ Suite <noreply@cyberriskaiq.com>',
			            to: ['consulting@b-one.me'],   // ← tvoj email
			            subject: 'New Early Access Request',
			            html: `<p>New early access request from: <strong>${email}</strong></p>`
			          })
		    });

	  if (response.ok) return res.status(200).json({ success: true });
	  return res.status(500).json({ error: 'Failed to send' });
}
