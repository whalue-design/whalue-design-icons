// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FilePptOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FilePptOutlined';

export default {
  name: 'IconFilePptOutlined',
  displayName: 'FilePptOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FilePptOutlinedSvg } },
      children,
    ),
};