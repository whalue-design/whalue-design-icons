// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FilePdfOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FilePdfOutlined';

export default {
  name: 'IconFilePdfOutlined',
  displayName: 'FilePdfOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FilePdfOutlinedSvg } },
      children,
    ),
};