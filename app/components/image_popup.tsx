'use client';

import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import MinecraftButton from './minecraft_button';
import Pagination from './pagination';
import { Constants } from '../constants';

const emptySubscribe = () => () => { };
function useIsMounted() {
    return useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false
    );
}

export default function ImagePopup({ isOpen, onClose, src, alt = 'Popup Image', }: { isOpen: boolean, onClose: () => void, src: string[], alt?: string; }) {
    const isMounted = useIsMounted();
    const [page, setPage] = useState(0);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !isMounted) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 backdrop-blur-sm py-15 overflow-y-auto"
            onClick={onClose}
        >
            <div className="flex min-h-full items-center justify-center py-15">
                <div
                    className="popupOuter relative max-w-[90vw] max-h-[90vh]"
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                >
                    <div className="popupInner">
                        <div className="popupContent">
                            <div className="justify-self-end">
                                <MinecraftButton onClick={onClose}>
                                    X
                                </MinecraftButton>
                            </div>
                            <div className="relative h-[80vh] w-[80vw] max-w-4xl">
                                <Image
                                    src={`${Constants.CERTIFICATES_PATH}${src[page]}`}
                                    alt={alt}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 1200px) 100vw, 1200px"
                                    priority
                                />
                            </div>
                            <Pagination currentPage={page} maxPage={src.length}
                                onPrevious={() => {
                                    setPage(page - 1)
                                }
                                }
                                onNext={() => {
                                    setPage(page + 1)
                                }
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}