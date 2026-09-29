'use client'

import { useState } from 'react'
import Map, { Marker, Popup } from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'

// Mapa base monocromático sin token (CARTO Positron)
const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'

// Centro-norte de México, donde están los proyectos (oeste-sur, este-norte)
const MEXICO_BOUNDS: [[number, number], [number, number]] = [[-108.5, 17.8], [-95.5, 27.2]]

interface ProjectPin {
    id: string
    longitude: number
    latitude: number
    city: string
    type: string
    stats?: string
}

export default function MexicoMap() {
    const [popupInfo, setPopupInfo] = useState<ProjectPin | null>(null)

    const projects: ProjectPin[] = [
        {
            id: 'leon',
            longitude: -101.6828,
            latitude: 21.1212,
            city: 'León',
            type: 'Industria Cuero Calzado',
            stats: '500 kWp',
        },
        {
            id: 'irapuato',
            longitude: -101.3475,
            latitude: 20.6767,
            city: 'Irapuato',
            type: 'Industrial',
            stats: '350 kWp',
        },
        {
            id: 'ags',
            longitude: -102.2916,
            latitude: 21.8853,
            city: 'Aguascalientes',
            type: 'Industrial Ensamblado',
            stats: '500 kWp',
        },
        {
            id: 'qro',
            longitude: -100.3899,
            latitude: 20.5888,
            city: 'Querétaro',
            type: 'Manufactura',
            stats: '2.5 MW',
        },
        {
            id: 'cdmx',
            longitude: -99.1332,
            latitude: 19.4326,
            city: 'CDMX',
            type: 'Proyecto Comercial',
            stats: '250 kWp',
        },
        {
            id: 'gdl',
            longitude: -103.3494,
            latitude: 20.6597,
            city: 'Guadalajara',
            type: 'Agroindustrial',
            stats: '500 kWp',
        },
        {
            id: 'mty',
            longitude: -100.3161,
            latitude: 25.6866,
            city: 'Monterrey',
            type: 'Industrial',
            stats: '1.2 MW',
        },
    ]

    return (
        <div className="w-full h-full flex flex-col gap-3">
        <div className="relative flex-1 min-h-0 rounded-[40px] md:rounded-orb overflow-hidden bg-white">
            <Map
                initialViewState={{
                    bounds: MEXICO_BOUNDS,
                    fitBoundsOptions: { padding: 24 },
                }}
                attributionControl={false}
                style={{ width: '100%', height: '100%' }}
                mapStyle={MAP_STYLE}
                interactive={true}
                scrollZoom={false}
                dragPan={true}
                dragRotate={false}
                touchZoomRotate={false}
            >
                {projects.map((project) => (
                    <Marker
                        key={project.id}
                        longitude={project.longitude}
                        latitude={project.latitude}
                        anchor="center"
                        onClick={(e: any) => {
                            e.originalEvent.stopPropagation()
                            setPopupInfo(project)
                        }}
                    >
                        <div className="relative cursor-pointer group">
                            {/* Indicador cuadrado */}
                            <div className="w-3 h-3 bg-carbon border-2 border-white transition-transform duration-300 group-hover:scale-150" />
                        </div>
                    </Marker>
                ))}

                {popupInfo && (
                    <Popup
                        longitude={popupInfo.longitude}
                        latitude={popupInfo.latitude}
                        anchor="bottom"
                        onClose={() => setPopupInfo(null)}
                        closeButton={false}
                        className="mapbox-popup"
                    >
                        <div className="bg-carbon text-white px-4 py-3 rounded-xl min-w-[200px]">
                            <div className="text-label uppercase text-white/60 mb-1">
                                {popupInfo.city}
                            </div>
                            <div className="text-sm mb-1">
                                {popupInfo.type}
                            </div>
                            {popupInfo.stats && (
                                <div className="text-xs text-white/70">
                                    {popupInfo.stats}
                                </div>
                            )}
                        </div>
                    </Popup>
                )}
            </Map>
        </div>
        <p className="text-xs text-mercury text-right">
            © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="hover:text-carbon">OpenStreetMap</a> · © <a href="https://carto.com/attributions" target="_blank" rel="noopener noreferrer" className="hover:text-carbon">CARTO</a>
        </p>
        </div>
    )
}
