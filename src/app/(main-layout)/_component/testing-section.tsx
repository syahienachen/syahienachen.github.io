'use client';

import { useEffect, useState } from "react";
import FingerprintJS from '@fingerprintjs/fingerprintjs';

export default function TestingSection() {
    const [fingerprint, setFingerprint] = useState<string | null>(null);
    const [dataResult, setDataResult] = useState<string>("");
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        // Load the FingerprintJS agent
        const loadFingerprint = async () => {
            const fp = await FingerprintJS.load();
            const result = await fp.get();
            console.log(result); // Menampilkan hasil fingerprint di console
            setDataResult(JSON.stringify(result.components, null, 2)); // Menyimpan hasil fingerprint ke state
            setFingerprint(result.visitorId);

            // Simpan di localStorage (opsional)
            localStorage.setItem('fingerprint', result.visitorId);
        };

        loadFingerprint();
    }, []);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(dataResult);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Gagal menyalin teks:', err);
        }
    };

    return (
        <div className="py-3 px-4 mt-8">
            <h1>Your Device Fingerprint:</h1>
            <p>{fingerprint ?? 'Loading...'}</p>
            <div className="border border-gray-300 rounded-md p-2 mt-4 mb-4 cursor-pointer text-center" onClick={copyToClipboard}>
                {copied ? '✅ Disalin!' : 'Copy'}
            </div>
            <p>{dataResult}</p>
        </div>
    )
}