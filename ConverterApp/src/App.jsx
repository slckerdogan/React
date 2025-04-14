import React, { useState, useEffect } from 'react';

const UnitConverter = () => {
  const [inputValue, setInputValue] = useState('1');
  const [inputUnit, setInputUnit] = useState('metre');
  const [outputUnit, setOutputUnit] = useState('kilometre');
  const [result, setResult] = useState('');

  const units = {
    nanometre: 0.000000001,
    mikrometre: 0.000001,
    milimetre: 0.001,
    santimetre: 0.01,
    desimetre: 0.1,
    metre: 1,
    kilometre: 1000,
    inç: 0.0254,
    ayak: 0.3048,
    yarda: 0.9144,
    mil: 1609.344,
    deniz_mili: 1852
  };

  const unitLabels = {
    nanometre: 'Nanometre (nm)',
    mikrometre: 'Mikrometre (μm)',
    milimetre: 'Milimetre (mm)',
    santimetre: 'Santimetre (cm)',
    desimetre: 'Desimetre (dm)',
    metre: 'Metre (m)',
    kilometre: 'Kilometre (km)',
    inç: 'İnç (in)',
    ayak: 'Ayak (ft)',
    yarda: 'Yarda (yd)',
    mil: 'Mil (mi)',
    deniz_mili: 'Deniz Mili (nmi)'
  };

  const convert = () => {
    try {
      const inputNum = parseFloat(inputValue);
      
      if (isNaN(inputNum)) {
        setResult('Lütfen geçerli bir sayı giriniz');
        return;
      }
      
      // Önce girilen değeri metreye dönüştür
      const valueInMetres = inputNum * units[inputUnit];
      
      // Sonra hedef birime dönüştür
      const outputValue = valueInMetres / units[outputUnit];
      
      setResult(`${inputNum} ${unitLabels[inputUnit]} = ${outputValue.toLocaleString('tr-TR', { maximumFractionDigits: 10 })} ${unitLabels[outputUnit]}`);
    } catch (error) {
      setResult('Dönüşüm sırasında bir hata oluştu');
    }
  };

  // Herhangi bir input değiştiğinde dönüşümü yap
  useEffect(() => {
    convert();
  }, [inputValue, inputUnit, outputUnit]);

  return (
    <div className="flex flex-col max-w-lg mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">Uzunluk Birimi Dönüştürücü</h1>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Değer:</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <label className="block text-gray-700 mb-2">Kaynak Birim:</label>
          <select
            value={inputUnit}
            onChange={(e) => setInputUnit(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded bg-white cursor-pointer"
          >
            {Object.keys(unitLabels).map(unit => (
              <option key={`from-${unit}`} value={unit}>
                {unitLabels[unit]}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex-1">
          <label className="block text-gray-700 mb-2">Hedef Birim:</label>
          <select
            value={outputUnit}
            onChange={(e) => setOutputUnit(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded bg-white cursor-pointer"
          >
            {Object.keys(unitLabels).map(unit => (
              <option key={`to-${unit}`} value={unit}>
                {unitLabels[unit]}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Sonuç:</h2>
        <p className="text-lg">{result}</p>
      </div>
    </div>
  );
};

export default UnitConverter;