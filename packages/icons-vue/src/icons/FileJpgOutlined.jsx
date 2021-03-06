// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FileJpgOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FileJpgOutlined';

export default {
  name: 'IconFileJpgOutlined',
  displayName: 'FileJpgOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileJpgOutlinedSvg } },
      children,
    ),
};