// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FilePdfTwoToneSvg from '@whalue-design/icons-svg/lib/asn/FilePdfTwoTone';

export default {
  name: 'IconFilePdfTwoTone',
  displayName: 'FilePdfTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FilePdfTwoToneSvg } },
      children,
    ),
};