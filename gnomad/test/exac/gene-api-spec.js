import expect from 'expect'
import fetch from 'isomorphic-fetch'
import config from 'config'

const API_URL = config.get('EXAC_API_URL')

describe('gene api', () => {
  const geneId = 'ENSG00000169174'
  const URL = `${API_URL}/gene/${geneId}`
  it('gets gene object with keys', (done) => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        // console.log(Object.keys(data))
        expect(Object.keys(data)).toEqual([
          'cnvgenes',
          'cnvs',
          'constraint',
          'coverage_stats',
          'gene',
          'transcript',
          'transcripts_in_gene',
          'variants_in_gene',
          'variants_in_transcript',
        ])
        done()
         // eslint-disable-next-line
      }).catch(error => console.log(error))
  })
  it('gets gene data', (done) => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        expect(data.gene).toEqual(
          {
            canonical_transcript: 'ENST00000302118',
            chrom: '1',
            full_gene_name: 'proprotein convertase subtilisin/kexin type 9',
            gene_id: 'ENSG00000169174',
            gene_name: 'PCSK9',
            gene_name_upper: 'PCSK9',
            omim_accession: '607786',
            omim_description: ' PROPROTEIN CONVERTASE, SUBTILISIN/KEXIN-TYPE, 9; PCSK9',
            other_names: ['HCHOLA3', 'NARC-1', 'FH3'],
            start: 55505222,
            stop: 55530526,
            strand: '+',
            xstart: 1055505222,
            xstop: 1055530526,
          }
        )
        done()
         // eslint-disable-next-line
      }).catch(error => console.log(error))
  })
  it('gets transcript data', (done) => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        // console.log(data.transcript.exons)
        expect(Object.keys(data.transcript)).toEqual(
          [
            'chrom',
            'exons',
            'gene_id',
            'start',
            'stop',
            'strand',
            'transcript_id',
            'xstart',
            'xstop'
          ]
        )
        expect(data.transcript.chrom).toBe('1')
        expect(data.transcript.exons.length).toBe(26)
        expect(data.transcript.exons.slice(0, 3)).toEqual([
          {
            chrom: '1',
            feature_type: 'exon',
            gene_id: 'ENSG00000169174',
            start: 55505222,
            stop: 55505718,
            strand: '+',
            transcript_id: 'ENST00000302118',
            xstart: 1055505222,
            xstop: 1055505718
          }, {
            chrom: '1',
            feature_type: 'UTR',
            gene_id: 'ENSG00000169174',
            start: 55505222,
            stop: 55505511,
            strand: '+',
            transcript_id: 'ENST00000302118',
            xstart: 1055505222,
            xstop: 1055505511
          }, {
            chrom: '1',
            feature_type: 'CDS',
            gene_id: 'ENSG00000169174',
            start: 55505512,
            stop: 55505718,
            strand: '+',
            transcript_id: 'ENST00000302118',
            xstart: 1055505512,
            xstop: 1055505718
          }
        ])
        expect(data.transcript.gene_id).toBe('ENSG00000169174')
        expect(data.transcript.start).toBe(55505222)
        expect(data.transcript.stop).toBe(55530526)
        expect(data.transcript.strand).toBe('+')
        expect(data.transcript.transcript_id).toBe('ENST00000302118')
        expect(data.transcript.xstart).toBe(1055505222)
        expect(data.transcript.xstop).toBe(1055530526)
        done()
         // eslint-disable-next-line
      }).catch(error => console.log(error))
  })
  it('gets transcripts in gene', (done) => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        // console.log(data.transcripts_in_gene)
        expect(data.transcripts_in_gene).toEqual([{
          chrom: '1',
          gene_id: 'ENSG00000169174',
          start: 55505222,
          stop: 55530526,
          strand: '+',
          transcript_id: 'ENST00000302118',
          xstart: 1055505222,
          xstop: 1055530526
        }, {
          chrom: '1',
          gene_id: 'ENSG00000169174',
          start: 55505432,
          stop: 55518425,
          strand: '+',
          transcript_id: 'ENST00000452118',
          xstart: 1055505432,
          xstop: 1055518425
        }, {
          chrom: '1',
          gene_id: 'ENSG00000169174',
          start: 55505896,
          stop: 55529113,
          strand: '+',
          transcript_id: 'ENST00000543384',
          xstart: 1055505896,
          xstop: 1055529113
        }, {
          chrom: '1',
          gene_id: 'ENSG00000169174',
          start: 55516608,
          stop: 55530524,
          strand: '+',
          transcript_id: 'ENST00000490692',
          xstart: 1055516608,
          xstop: 1055530524
        }])
         // eslint-disable-next-line
         done()
      }).catch(error => console.log(error))
  })
  it('gets coverage stats', (done) => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        expect(data.coverage_stats.length).toEqual(3497)
        expect(data.coverage_stats.slice(0, 5)).toEqual([{
          '1': 0.9887,
          '5': 0.7082,
          '10': 0.2909,
          '15': 0.1451,
          '20': 0.1077,
          '25': 0.0957,
          '30': 0.0859,
          '50': 0.0482,
          '100': 0.0034,
          mean: 11.24,
          median: 7,
          pos: 55505460
        }, {
          '1': 0.9896,
          '5': 0.7141,
          '10': 0.2913,
          '15': 0.146,
          '20': 0.1087,
          '25': 0.0956,
          '30': 0.0867,
          '50': 0.0506,
          '100': 0.0036,
          mean: 11.34,
          median: 7,
          pos: 55505461
        }, {
          '1': 0.9896,
          '5': 0.7166,
          '10': 0.2937,
          '15': 0.1478,
          '20': 0.1109,
          '25': 0.0973,
          '30': 0.0877,
          '50': 0.052,
          '100': 0.0037,
          mean: 11.48,
          median: 7,
          pos: 55505462
        }, {
          '1': 0.9901,
          '5': 0.7208,
          '10': 0.2975,
          '15': 0.1499,
          '20': 0.1108,
          '25': 0.0977,
          '30': 0.0887,
          '50': 0.0529,
          '100': 0.0042,
          mean: 11.59,
          median: 7,
          pos: 55505463
        }, {
          '1': 0.9899,
          '5': 0.7235,
          '10': 0.3016,
          '15': 0.1502,
          '20': 0.1119,
          '25': 0.0984,
          '30': 0.0908,
          '50': 0.0557,
          '100': 0.0045,
          mean: 11.74,
          median: 7,
          pos: 55505464
        }])
        done()
         // eslint-disable-next-line
      }).catch(error => console.log(error))
  })
  it('gets constraint data', (done) => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        expect(data.constraint).toEqual({
          bp: 2079,
          cnv_z: 0.0240543837022767,
          exp_cnv: 6.17154136168847,
          exp_lof: 16.9187162512,
          exp_mis: 276.909800337,
          exp_syn: 136.853201549,
          lof_z: 0.221252094879999,
          mis_z: 0.555820087234748,
          mu_lof: 0.00000133968418904,
          mu_mis: 0.0000288302652318,
          mu_syn: 0.0000143023722955,
          n_cnv: 6,
          n_exons: 12,
          n_lof: 16,
          n_mis: 258,
          n_syn: 111,
          pLI: 1.02507611210468e-10,
          syn_z: 1.37004966509371,
          transcript: 'ENST00000302118',
          tx_end: 55529257,
          tx_start: 55505510
        })
        done()
         // eslint-disable-next-line
      }).catch(error => console.log(error))
  })
  it('gets cnvs data', (done) => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        expect(data.cnvs.length).toBe(12)
        expect(data.cnvs[0]).toEqual({
          chrom: '1',
          del0: 6,
          del60: 3,
          delpop0: 'Deletions:6|NFE:6/32850',
          delpop60: 'Deletions:3|NFE:3/32850',
          dup0: 3,
          dup60: 1,
          duppop0: 'Duplications:3|NFE:2/32850,SAS:1/8205',
          duppop60: 'Duplications:1|NFE:1/32850',
          gene: 'PCSK9',
          start: 55505221,
          stop: 55505717,
          transcript: 'ENST00000302118',
          xstart: 1055505221,
          xstop: 1055505717
        })
        done()
         // eslint-disable-next-line
      }).catch(error => console.log(error))
  })
  it('gets cnvgenes data', (done) => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        expect(data.cnvgenes.length).toBe(1)
        expect(data.cnvgenes).toEqual([{
          cnv0: 25,
          cnv60: 6,
          cnv_score: -0.0840450951954554,
          del0: 12,
          del60: 3,
          del_score: -0.525966132581613,
          dup0: 13,
          dup60: 3,
          dup_score: 0.231824190713529,
          gene: 'ENSG00000169174',
          rank: 9896,
          symbol: 'PCSK9'
        }])
        done()
         // eslint-disable-next-line
      }).catch(error => console.log(error))
  })
  it('gets variants_in_gene data', (done) => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        expect(data.variants_in_gene.length).toEqual(759)
        expect(data.variants_in_gene[0]).toEqual(
          { CANONICAL: 'YES',
               HGVS: '',
               HGVSc: 'c.-36C>T',
               HGVSp: '',
               ac_female: '0',
               ac_male: '1',
               allele_count: 1,
               allele_freq: 0.000032634945499641017,
               allele_num: 30642,
               alt: 'T',
               an_female: '13162',
               an_male: '17480',
               category: 'other_variant',
               chrom: '1',
               filter: 'PASS',
               flags: [],
               hom_count: 0,
               indel: false,
               major_consequence: '5_prime_UTR_variant',
               pop_acs:
                { African: 0,
                  'East Asian': 0,
                  'European (Finnish)': 0,
                  'European (Non-Finnish)': 1,
                  Latino: 0,
                  Other: 0,
                  'South Asian': 0 },
               pop_ans:
                { African: 3508,
                  'East Asian': 2332,
                  'European (Finnish)': 360,
                  'European (Non-Finnish)': 14444,
                  Latino: 1110,
                  Other: 204,
                  'South Asian': 8684 },
               pop_homs:
                { African: 0,
                  'East Asian': 0,
                  'European (Finnish)': 0,
                  'European (Non-Finnish)': 0,
                  Latino: 0,
                  Other: 0,
                  'South Asian': 0 },
               pos: 55505475,
               quality_metrics:
                { BaseQRankSum: '-1.093e+00',
                  ClippingRankSum: '0.555',
                  DP: '695607',
                  FS: '2.276',
                  InbreedingCoeff: '-0.0361',
                  MQ: '60.00',
                  MQRankSum: '-8.110e-01',
                  QD: '5.42',
                  ReadPosRankSum: '-3.120e-01',
                  VQSLOD: '-2.094e+00' },
               ref: 'C',
               rsid: '.',
               variant_id: '1-55505475-C-T'
             }
        )
        done()
         // eslint-disable-next-line
      }).catch(error => console.log(error))
  })
  it('gets variants_in_transcript', (done) => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        // console.log(data.variants_in_transcript)
        expect(data.variants_in_transcript.length).toBe(759)
        done()
         // eslint-disable-next-line
      }).catch(error => console.log(error))
  })
})
